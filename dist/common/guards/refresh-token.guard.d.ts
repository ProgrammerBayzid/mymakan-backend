import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
declare const RtGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class RtGuard extends RtGuard_base {
    constructor();
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
