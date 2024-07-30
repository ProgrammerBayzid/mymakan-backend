import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryAgentDto {
  @ApiPropertyOptional({ description: 'Page number for pagination',  })
  page?: number ;

  @ApiPropertyOptional({ description: 'Number of items per page',  })
  limit?: number ;

  @ApiPropertyOptional({ description: 'Number of items per page',  })
  totalrating?: number ;

  @ApiPropertyOptional({ description: 'Number of items per page',  })
  avgrating?: number ;

  @ApiPropertyOptional({ description: 'Number of items per page',  })
  totalReview?: number ;

  @ApiPropertyOptional({ description: 'Filter the post by state',  })
  state?: string ;

  @ApiPropertyOptional({ description: 'Filter the post by country', })
  country?: string ;

  @ApiPropertyOptional({ description: 'Filter the post by country', })
  fullName?: string ;

  @ApiPropertyOptional({ description: 'Filter the post by country', })
  companyName?: string ;

  @ApiPropertyOptional({ description: 'Filter the post by sortBy',})
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Filter post by sortOrder asc or desc',})
  sortOrder?: 'asc' | 'desc';
}
