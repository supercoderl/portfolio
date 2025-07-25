import { Injectable } from '@angular/core';
import { ListResponse, Project, Query } from '../../../shared/dto';
import { withApiLoading$ } from '../../../shared/utils/helpers';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ApiLoadingStore } from '../../../shared/stores/loading.store';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(
        private apiSrv: ApiService,
        private store: ApiLoadingStore
    ) { }

    urlPath = "/projects/";

    fetchList$ = (query: Query): Observable<ListResponse<Project>> =>
        withApiLoading$<ListResponse<Project>>(
            'get-projects',
            this.apiSrv.get<ListResponse<Project>>(
                this.urlPath,
                {
                    params: new HttpParams({ fromObject: query as any })
                }),
            this.store
        );

    // remove(data: any) {
    //   return request({
    //     url: `${this.urlPath}`,
    //     method: "delete",
    //     data
    //   });
    // }

    // getDetail(id: string) {
    //   return request({
    //     url: `${this.urlPath + id}`,
    //     method: "get"
    //   });
    // }

    // create(data: createExperience) {
    //   return request({
    //     url: `${this.urlPath}`,
    //     method: "post",
    //     data
    //   });
    // }

    // update(data: updateExperience) {
    //   return request({
    //     url: `${this.urlPath + data.id}`,
    //     method: "put",
    //     data
    //   });
    // }
}
