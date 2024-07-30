/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
export type PropertyCategoryDocument = PropertyCategory & Document;
export declare class PropertyCategory {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PropertyCategorySchema: import("mongoose").Schema<PropertyCategory, import("mongoose").Model<PropertyCategory, any, any, any, import("mongoose").Document<unknown, any, PropertyCategory> & PropertyCategory & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PropertyCategory, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PropertyCategory>> & import("mongoose").FlatRecord<PropertyCategory> & Required<{
    _id: string;
}>>;
