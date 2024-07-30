import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as sharp from 'sharp'; // If you are using sharp for image processing, you can keep this import
import * as ffmpeg from 'fluent-ffmpeg';
import { Readable } from 'stream';
import { promisify } from 'util';
import { pipeline } from 'stream';
import * as streamBuffers from 'stream-buffers';
import * as ffmpegStatic from 'ffmpeg-static';
import * as dotenv from 'dotenv';

dotenv.config();

const streamPipeline = promisify(pipeline);

@Injectable()
export class FileUploadService {
  AWS_S3_BUCKET = 'mymakan-image';

  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  async uploadFiles(files: { buffer: Buffer, originalname: string, mimetype: string }[]) {
    const uploadPromises = files.map(file => {
      if (this.isVideo(file.mimetype)) {
        return this.compressVideo(file.buffer)
          .then(compressedBuffer => this.s3_upload(compressedBuffer, this.AWS_S3_BUCKET, file.originalname, file.mimetype));
      } else {
        return this.s3_upload(file.buffer, this.AWS_S3_BUCKET, file.originalname, file.mimetype);
      }
    });
    return await Promise.all(uploadPromises);
  }

  private isVideo(mimetype: string): boolean {
    return mimetype.startsWith('video/');
  }

  private async compressVideo(file: Buffer): Promise<Buffer> {
    const tempBuffer = new streamBuffers.WritableStreamBuffer({
      initialSize: 100 * 1024, // start at 100 kilobytes.
      incrementAmount: 10 * 1024, // grow by 10 kilobytes each time buffer overflows.
    });

    const inputStream = new Readable();
    inputStream.push(file);
    inputStream.push(null);

    await new Promise((resolve, reject) => {
      ffmpeg(inputStream)
        .setFfmpegPath(ffmpegStatic) // Set the path to the static FFmpeg binary
        .outputOptions('-vf', 'scale=1280:-1') // Resize the video to 1280x720 for higher quality
        .outputOptions('-b:v', '2M') // Set video bitrate to 2 Mbps for higher quality
        .outputOptions('-crf', '18') // Lower CRF value for better quality (default is 23)
        .outputOptions('-preset', 'slow') // Use a slower preset for better quality
        .outputOptions('-movflags', 'frag_keyframe+empty_moov') // Enable fragmentation
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

    return tempBuffer.getContents() as Buffer;
  }

  private async s3_upload(file: Buffer, bucket: string, name: string, mimetype: string) {
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
    } catch (e) {
      console.error('S3 Upload Error:', e);
    }
  }
}
