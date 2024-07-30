// import { FileUploadService } from './file-upload.service';
// import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
// import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
// import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
// import { Express } from 'express';
// import { Public } from 'src/common/public.decorator';

// @Controller('file-upload')
// @ApiTags('File Upload')
// export class FileUploadController {
//   constructor(private readonly fileUploadService: FileUploadService) {}

 
//   @Public()
//   @Post('upload')
//   @ApiConsumes('multipart/form-data')
//   @ApiBody({
//     description: 'Files to upload',
//     schema: {
//       type: 'object',
//       properties: {
//         files: {
//           type: 'array',
//           items: {
//             type: 'string',
//             format: 'binary',
//           },
//         },
//       },
//     },
//   })
//   @UseInterceptors(FilesInterceptor('files', 10)) // Adjust the limit as needed
//   async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
//     return this.fileUploadService.uploadFiles(files);
//   }
// }

import { FileUploadService } from './file-upload.service';
import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { Express } from 'express';
import { Public } from 'src/common/public.decorator';

@Controller('file-upload')
@ApiTags('File Upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Public()
  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Files to upload',
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @UseInterceptors(FilesInterceptor('files', 10)) // Adjust the limit as needed
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return this.fileUploadService.uploadFiles(files);
  }
}
