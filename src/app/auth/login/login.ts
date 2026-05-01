import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnDestroy {
  isSubmitting = false;
  isFormExiting = false;
  private navigationTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  login() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.isFormExiting = true;

    this.auth.login();
    this.auth.markSidebarEntryAnimation();

    this.navigationTimer = setTimeout(() => {
      void this.router.navigate(['/dashboard'], { replaceUrl: true });
    }, 260);
  }

  ngOnDestroy() {
    if (this.navigationTimer) {
      clearTimeout(this.navigationTimer);
    }
  }
}
