import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginFormComponent } from '../auth/login-form/login-form.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-dia-header',
  templateUrl: './dia-header.component.html',
  styleUrls: ['./dia-header.component.css']
})
export class DiaHeaderComponent implements OnInit {
    appTitle = "Diabetes Insight and Awareness"

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private snackBar: MatSnackBar,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.router.events.subscribe(evt => {
            if (evt instanceof NavigationEnd) {
                if (this.activatedRoute.snapshot.queryParams['loginOpened']) {
                    this.openAuthForm();

                    this.snackBar.open('Admins need to login to view reports.', 'Ok');
                }
            }
        });
    }

    get isHome() {
        return this.router.url === '/home';
    }

    get isSurvey() {
        return this.router.url === '/survey';
    }

    openAuthForm() {
        const dialogRef = this.dialog.open(LoginFormComponent, {
            // data: {name: this.name, animal: this.animal},
        });
    }

    onAdminPortalClick() {
        if (this.authService.loggedAsAdmin) {
            this.router.navigate(['reports']);
        }
        else {
            this.openAuthForm();
        }
    }
}
