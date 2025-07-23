import {
    HttpInterceptorFn,
    HttpRequest,
    HttpHandlerFn,
    HttpErrorResponse,
    HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export const apiHttpInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<any> => {
    const isRelative = !/^http(s)?:\/\//.test(req.url);
    const fullUrl = isRelative ? `${environment.apiUrl}/api${req.url}` : req.url;

    const modifiedReq = req.clone({
        url: fullUrl,
        withCredentials: true,
    });

    return next(modifiedReq).pipe(
        map((event) => {
            if (event instanceof HttpResponse) {
                interface ApiResponse {
                    statusCode?: number;
                    message?: string;
                    [key: string]: any;
                }
                const res = event.body as ApiResponse;

                return event.clone({ body: res });
            }
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            return throwError(() => error);
        })
    );
};
