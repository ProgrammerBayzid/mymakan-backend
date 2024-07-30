import { FollowService } from './follow.service';
export declare class FollowController {
    private readonly followService;
    constructor(followService: FollowService);
    followUser(followingType: string, followingId: string, currentUserId: string, currentUserType: string): Promise<string>;
    unfollowUser(followingType: string, followingId: string, currentUserId: string, currentUserType: string): Promise<string>;
    myfollowingUser(currentUserId: string, currentUserType: string, page: string, limit: string, sortBy: string, sortOrder: 'asc' | 'desc', search?: string): Promise<any[]>;
    myfollowingAgent(currentUserId: string, currentUserType: string, page: string, limit: string, sortBy: string, sortOrder: 'asc' | 'desc', search?: string): Promise<any[]>;
    myfollowerUser(currentUserId: string, currentUserType: string, page: string, limit: string, sortBy: string, sortOrder: 'asc' | 'desc', search?: string): Promise<any[]>;
    myfollowerAgent(currentUserId: string, currentUserType: string, page: string, limit: string, sortBy: string, sortOrder: 'asc' | 'desc', search?: string): Promise<any[]>;
    followingExisting(userId: string, role: string, followingId: string): Promise<boolean>;
}
