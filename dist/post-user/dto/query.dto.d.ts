export declare class QueryUserPostDto {
    page?: number;
    limit?: number;
    for?: string;
    state?: string;
    country?: string;
    userId?: string;
    booked?: Boolean;
    sell?: Boolean;
    postType?: string;
    type?: string;
    propertyCategory?: string;
    propertyType?: string;
    towersorBuildingName?: string;
    price?: string;
    parking?: string;
    tags?: string[];
    sellType?: string[];
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
