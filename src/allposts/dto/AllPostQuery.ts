import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryAllPostDto {
  @ApiPropertyOptional({ description: 'Page number for pagination',  })
  page?: number ;

  @ApiPropertyOptional({ description: 'Number of items per page',  })
  limit?: number ;

  @ApiPropertyOptional({ description: 'Filter the post by rent ot sell', })
  for?: string ;

  @ApiPropertyOptional({ description: 'Filter the post by rent ot sell', })
  role?: string ;

  @ApiPropertyOptional({ description: 'Filter the post by state',  })
  state?: string ;

  @ApiPropertyOptional({ description: 'Filter the post by country', })
  country?: string ;

  @ApiPropertyOptional({ description: 'Filter the post by country', })
  agentId?: string ;

  @ApiPropertyOptional({ description: 'Filter the post by country', })
  userId?: string ;
  
  @ApiPropertyOptional({ description: 'Filter the post by country',})
  postType?: string;

  @ApiPropertyOptional({ description: 'Filter the post by country',})
  type?: string;

  @ApiPropertyOptional({ description: 'Filter the post by country',})
  propertyCategory?: string;

  @ApiPropertyOptional({ description: 'Filter the post by country',})
  propertyType?: string;

  @ApiPropertyOptional({ description: 'Filter the post by country',})
  price?: string;

  @ApiPropertyOptional({ description: 'Filter the post by country',})
  towersorBuildingName?: string;

  @ApiPropertyOptional({ description: 'Filter the post by country',})
  parking?: string;

  @ApiPropertyOptional({ description: 'Filter the post by country',})
  booked?: Boolean ;

  @ApiPropertyOptional({ description: 'Filter the post by country',})
  sell?: Boolean ;

  @ApiPropertyOptional({ description: 'Filter the post by tags',})
  tags?: string[];

  @ApiPropertyOptional({ description: 'Filter the post by tags',})
  sellType?: string[];

  @ApiPropertyOptional({ description: 'Filter the post by sortBy',})
  sortBy?: string;

  @ApiPropertyOptional({ description: 'Filter post by sortOrder asc or desc',})
  sortOrder?: 'asc' | 'desc';
}
