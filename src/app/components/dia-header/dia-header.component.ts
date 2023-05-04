import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginFormComponent } from '../auth/login-form/login-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dia-header',
  templateUrl: './dia-header.component.html',
  styleUrls: ['./dia-header.component.css']
})
export class DiaHeaderComponent {
    appTitle = "Diabetes Insight and Awareness"

    constructor(
        public dialog: MatDialog,
        private router: Router
    ) { }

    get isHome() {
        return this.router.url === '/home';
    }

    openAuthForm() {
        const dialogRef = this.dialog.open(LoginFormComponent, {
            // data: {name: this.name, animal: this.animal},
        });
    
        dialogRef.afterClosed().subscribe(result => {
            console.log("Paindi aa fer Dhakk Champion?")
        });
    }
}
