import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'My-Makan Backend 🚀 Application is running';
  }
}
