import { PostLocation } from 'src/post-agent/entities/post-location';
export declare class CreatePostUserDto {
    title: string;
    description: string;
    for: string;
    image: string[];
    video: string[];
    doc: string[];
    tags: string[];
    location: PostLocation;
    postType: string;
    type: string;
    propertyCategory: string;
    propertyType: string;
    parking: string;
    sqft: string;
    price: string;
    sellType: String[];
}
