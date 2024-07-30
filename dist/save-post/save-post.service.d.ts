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
import { SavePost, SavePostDocument } from './entities/save-post.entity';
import mongoose from 'mongoose';
export declare class SavePostService {
    private readonly savePostModel;
    constructor(savePostModel: mongoose.Model<SavePostDocument>);
    savePostById(role: string, id: string, userId: string, saveby: string): Promise<string>;
    findMySavePost(id: string, role: string, page?: number, limit?: number, sortBy?: string, sortOrder?: string, postType?: string): Promise<SavePost[]>;
    deleteById(id: string): Promise<SavePost>;
    savePostExisting(role: string, id: string, savePostId: string): Promise<boolean>;
    deletePostExisting(role: string, id: string, savePostId: string): Promise<boolean>;
}
