import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private _loggedAsAdmin: boolean = false;

    constructor() { }

    get loggedAsAdmin() {
        return this._loggedAsAdmin;
    }

    login() {
        this._loggedAsAdmin = true;
    }

    logout() {
        this._loggedAsAdmin = false;
    }
}
