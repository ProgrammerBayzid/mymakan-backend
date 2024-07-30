import { CreatePostUserDto } from './create-post-user.dto';
import { PostLocation } from 'src/post-agent/entities/post-location';
declare const UpdatePostUserDto_base: import("@nestjs/common").Type<Partial<CreatePostUserDto>>;
export declare class UpdatePostUserDto extends UpdatePostUserDto_base {
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
