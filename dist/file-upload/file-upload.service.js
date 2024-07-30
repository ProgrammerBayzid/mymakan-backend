"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const ffmpeg = require("fluent-ffmpeg");
const stream_1 = require("stream");
const util_1 = require("util");
const stream_2 = require("stream");
const streamBuffers = require("stream-buffers");
const ffmpegStatic = require("ffmpeg-static");
const dotenv = require("dotenv");
dotenv.config();
const streamPipeline = (0, util_1.promisify)(stream_2.pipeline);
let FileUploadService = class FileUploadService {
    constructor() {
        this.AWS_S3_BUCKET = 'mymakan-image';
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
    }
    async uploadFiles(files) {
        const uploadPromises = files.map(file => {
            if (this.isVideo(file.mimetype)) {
                return this.compressVideo(file.buffer)
                    .then(compressedBuffer => this.s3_upload(compressedBuffer, this.AWS_S3_BUCKET, file.originalname, file.mimetype));
            }
            else {
                return this.s3_upload(file.buffer, this.AWS_S3_BUCKET, file.originalname, file.mimetype);
            }
        });
        return await Promise.all(uploadPromises);
    }
    isVideo(mimetype) {
        return mimetype.startsWith('video/');
    }
    async compressVideo(file) {
        const tempBuffer = new streamBuffers.WritableStreamBuffer({
            initialSize: 100 * 1024,
            incrementAmount: 10 * 1024,
        });
        const inputStream = new stream_1.Readable();
        inputStream.push(file);
        inputStream.push(null);
        await new Promise((resolve, reject) => {
            ffmpeg(inputStream)
                .setFfmpegPath(ffmpegStatic)
                .outputOptions('-vf', 'scale=1280:-1')
                .outputOptions('-b:v', '2M')
                .outputOptions('-crf', '18')
                .outputOptions('-preset', 'slow')
                .outputOptions('-movflags', 'frag_keyframe+empty_moov')
                .format('mp4')
                .on('start', (commandLine) => {
                console.log('Spawned FFmpeg with command: ' + commandLine);
            })
                .on('progress', (progress) => {
                console.log('Processing: ' + progress.percent + '% done');
            })
                .on('stderr', (stderrLine) => {
                console.log('Stderr output: ' + stderrLine);
            })
                .on('end', resolve)
                .on('error', (err, stdout, stderr) => {
                console.error('Error occurred: ' + err.message);
                console.error('FFmpeg stdout: ' + stdout);
                console.error('FFmpeg stderr: ' + stderr);
                reject(err);
            })
                .pipe(tempBuffer, { end: true });
        });
        return tempBuffer.getContents();
    }
    async s3_upload(file, bucket, name, mimetype) {
        const params = {
            Bucket: bucket,
            Key: `${Date.now()}-${name}`,
            Body: file,
            ACL: 'public-read',
            ContentType: mimetype,
            ContentDisposition: 'inline',
        };
        try {
            const s3Response = await this.s3.upload(params).promise();
            return s3Response;
        }
        catch (e) {
            console.error('S3 Upload Error:', e);
        }
    }
};
exports.FileUploadService = FileUploadService;
exports.FileUploadService = FileUploadService = __decorate([
    (0, common_1.Injectable)()
], FileUploadService);
//# sourceMappingURL=file-upload.service.js.map