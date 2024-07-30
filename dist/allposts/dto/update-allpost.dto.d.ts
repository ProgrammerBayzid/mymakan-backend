import { PostLocation } from 'src/post-agent/entities/post-location';
export declare class UpdateAllPostDto {
    title?: string;
    description?: string;
    for?: string;
    image?: string[];
    tags?: string[];
    location?: PostLocation;
    booked?: boolean;
    sell?: boolean;
    hidden?: boolean;
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
