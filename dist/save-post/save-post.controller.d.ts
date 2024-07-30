import { SavePostService } from './save-post.service';
import { SavePost } from './entities/save-post.entity';
export declare class SavePostController {
    private readonly savePostService;
    constructor(savePostService: SavePostService);
    savePostById(id: string, role: string, userId: string, saveby: string): Promise<string>;
    findMyPost(userId: string, role: string, page?: number, limit?: number, sortBy?: string, sortOrder?: string, postType?: string): Promise<SavePost[]>;
    delete(id: string): Promise<SavePost>;
    existingSavePost(userId: string, role: string, savePostId: string): Promise<boolean>;
    deletePostExisting(userId: string, role: string, savePostId: string): Promise<boolean>;
}
