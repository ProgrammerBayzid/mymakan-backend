/// <reference types="node" />
import * as AWS from 'aws-sdk';
export declare class FileUploadService {
    AWS_S3_BUCKET: string;
    s3: AWS.S3;
    uploadFiles(files: {
        buffer: Buffer;
        originalname: string;
        mimetype: string;
    }[]): Promise<AWS.S3.ManagedUpload.SendData[]>;
    private isVideo;
    private compressVideo;
    private s3_upload;
}
