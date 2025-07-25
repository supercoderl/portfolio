import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(
        private http: HttpClient
    ) { }

    url = `${environment.apiUrl}/api`;

    get<T>(path: string, param: any): Observable<T> {
        return this.http.get<T>(this.url + path, { params: param });
    }

    post<T>(path: string, body: any, param: any): Observable<T> {
        return this.http.post<T>(this.url + path, body, { params: param });
    }

    put<T>(path: string, body: any, param: any): Observable<T> {
        return this.http.put<T>(this.url + path, body, { params: param });
    }

    delete<T>(path: string, param: any): Observable<T> {
        return this.http.delete<T>(this.url + path, { params: param });
    }

    //   public successNoti(title: string, content: string, options?: NzNotificationDataOptions) {
    //     return this.notification.create("success", title, content, options);
    //   }

    //   public errorNoti(title: string, content: string, options?: NzNotificationDataOptions) {
    //     return this.notification.create("error", title, content, options);
    //   }

    //   public warningNoti(title: string, content: string, options?: NzNotificationDataOptions) {
    //     return this.notification.create("warning", title, content, options);
    //   }

    //   public infoNoti(title: string, content: string, options?: NzNotificationDataOptions) {
    //     return this.notification.create("info", title, content, options);
    //   }
}
