/// <reference types="multer" />
import { FileUploadService } from './file-upload.service';
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadFiles(files: Express.Multer.File[]): Promise<import("aws-sdk/clients/s3").ManagedUpload.SendData[]>;
}
