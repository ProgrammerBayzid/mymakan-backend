import { CreatePostAgentDto } from './create-post-agent.dto';
import { PostLocation } from '../entities/post-location';
declare const UpdatePostAgentDto_base: import("@nestjs/common").Type<Partial<CreatePostAgentDto>>;
export declare class UpdatePostAgentDto extends UpdatePostAgentDto_base {
    title?: string;
    description?: string;
    for?: string;
    image?: string[];
    tags?: string[];
    location?: PostLocation;
    booked?: boolean;
    sell?: boolean;
    postType?: string;
    type?: string;
    propertyCategory?: string;
    propertyType?: string;
    parking: string;
    sqft?: string;
    price?: string;
    sellType?: String[];
    like?: number;
}
export {};
