import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
/**
 * Auth Guards
 */
export const canActivateGuard = () => {
    const router = inject(Router);
    const authService = inject(AuthService);

    return authService.loggedAsAdmin ? true : router.parseUrl('home?loginOpened=true');
}
