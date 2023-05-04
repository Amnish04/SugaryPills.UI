import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
    @ViewChild('closeDialogButton') closeDialogButton: ElementRef | null = null;

    constructor(
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) {}

    login() {
        // Fake Login
        this.authService.login();

        this.router.navigate(['reports']);
        this.closeDialogButton?.nativeElement.click();

        this.snackBar.open('Successfully Logged In', 'Yayy');
    }
}
