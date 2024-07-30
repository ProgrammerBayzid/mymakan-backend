import { PostLocation } from '../entities/post-location';
export declare class CreatePostAgentDto {
    title: string;
    description: string;
    for: string;
    readonly media: MediaItem[];
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
declare class MediaItem {
    readonly _id: string;
    readonly type: string;
    readonly url: string;
}
export {};
