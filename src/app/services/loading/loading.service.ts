import { Injectable } from '@angular/core';

// Number of seconds before spinner tooltip shows up
const TOOLTIP_THRESHOLD_TIME = 3;

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private _loading: boolean = false;
    private loadingInterval: any;
    private waitTime = 0; // Seconds

    enableTooltip = true;

    constructor() { }

    set loading(loading: boolean) {
        setTimeout(() => {
            this._loading = loading;

            if (loading && !this.loadingInterval) {
                this.loadingInterval = setInterval(() => {
                    ++this.waitTime;
                }, 1000 * 1);
            }
            else if (!loading) {
                clearInterval(this.loadingInterval);
                this.loadingInterval = null;
                this.waitTime = 0;
            }
        }, 0);
    }

    get loading(): boolean {
        return this._loading;
    }

    get showTooltip() {
        return this.enableTooltip && this.waitTime >= TOOLTIP_THRESHOLD_TIME;
    }
}
