import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private readonly SIDEBAR_ANIMATION_KEY = 'sidebar-entry-animation';
  private platformId = inject(PLATFORM_ID);

  login() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.TOKEN_KEY, 'admin-token');
    }
  }

  markSidebarEntryAnimation() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(this.SIDEBAR_ANIMATION_KEY, '1');
    }
  }

  consumeSidebarEntryAnimation(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const shouldAnimate = sessionStorage.getItem(this.SIDEBAR_ANIMATION_KEY) === '1';

      if (shouldAnimate) {
        sessionStorage.removeItem(this.SIDEBAR_ANIMATION_KEY);
      }

      return shouldAnimate;
    }

    return false;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.TOKEN_KEY);
      sessionStorage.removeItem(this.SIDEBAR_ANIMATION_KEY);
    }
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem(this.TOKEN_KEY);
    }
    return false;
  }
}
