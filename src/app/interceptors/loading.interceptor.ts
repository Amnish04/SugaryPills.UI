import { LoadingService } from './../services/loading/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    private totalRequests: number = 0;

    constructor(
        private loadingService: LoadingService
    ) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.totalRequests++;
        this.loadingService.loading = true;
        return next.handle(request).pipe(
        finalize(() => {
            this.totalRequests--;
            if (this.totalRequests == 0) {
            this.loadingService.loading = false;
            }
        }));
    }
}
