// dto/pagination-query.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationQueryDto {
  @ApiPropertyOptional({ description: 'Page number for pagination', default: 1 })
  page?: number = 1;

  @ApiPropertyOptional({ description: 'Number of items per page', default: 10 })
  limit?: number = 10;

  @ApiPropertyOptional({ description: 'Search term for company name', default: '' })
  search?: string = '';
}
