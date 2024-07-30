export declare class QueryAgentPostDto {
    page?: number;
    limit?: number;
    for?: string;
    state?: string;
    country?: string;
    agentId?: string;
    postType?: string;
    type?: string;
    propertyCategory?: string;
    propertyType?: string;
    price?: string;
    towersorBuildingName?: string;
    parking?: string;
    booked?: Boolean;
    sell?: Boolean;
    tags?: string[];
    sellType?: string[];
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
