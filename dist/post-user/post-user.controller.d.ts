import { PostUserService } from './post-user.service';
import { CreatePostUserDto } from './dto/create-post-user.dto';
import { UpdatePostUserDto } from './dto/update-post-user.dto';
import { PostUser } from './entities/post-user.entity';
import { QueryUserPostDto } from './dto/query.dto';
export declare class PostUserController {
    private readonly postUserService;
    constructor(postUserService: PostUserService);
    createUserPost(createUserPost: CreatePostUserDto, userId?: string, role?: string): Promise<PostUser>;
    findAll(queryOptions: QueryUserPostDto): Promise<PostUser[]>;
    findMyPost(userId: string, queryOptions: QueryUserPostDto): Promise<PostUser[]>;
    getGetBlog(id: string): Promise<PostUser>;
    updatePost(id: string, updateUserPostDto: UpdatePostUserDto): Promise<PostUser>;
    like(id: string, userId: string, role: string): Promise<PostUser>;
    unlike(id: string, userId: string): Promise<PostUser>;
    delete(id: string): Promise<PostUser>;
}
