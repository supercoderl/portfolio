import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
    constructor(
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
            // if (err.status === 401) {
            //     return this.handle401Error(request, next);
            // }
            //   switch (err.status) {
            //     case 403:
            //       this.router.navigate(['exception/403']);
            //       break;
            //     case 404:
            //       this.router.navigate(['exception/404']);
            //       break;
            //   }
            return throwError(() => err);
        }));
    }

    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    //   private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    //     if (!this.isRefreshing) {
    //       this.isRefreshing = true;
    //       this.refreshTokenSubject.next(null);
    //     } else {
    //       return this.refreshTokenSubject.pipe(
    //         filter(token => token != null),
    //         take(1),
    //         switchMap(jwt => {
    //           return next.handle(this.addToken(request, jwt));
    //         }));
    //     }
    //   }
}
