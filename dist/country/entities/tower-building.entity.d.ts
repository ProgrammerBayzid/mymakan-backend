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
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import mongoose, { HydratedDocument } from 'mongoose';
export type TowersOrBuildingNameDocument = HydratedDocument<TowersOrBuildingName>;
export declare class TowersOrBuildingName {
    _id: string;
    name: string;
    city_id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const TowersOrBuildingNameSchema: mongoose.Schema<TowersOrBuildingName, mongoose.Model<TowersOrBuildingName, any, any, any, mongoose.Document<unknown, any, TowersOrBuildingName> & TowersOrBuildingName & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, TowersOrBuildingName, mongoose.Document<unknown, {}, mongoose.FlatRecord<TowersOrBuildingName>> & mongoose.FlatRecord<TowersOrBuildingName> & Required<{
    _id: string;
}>>;
