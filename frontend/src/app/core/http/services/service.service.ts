import { Injectable } from '@angular/core';
import { ListResponse, Query, Service } from '../../../shared/dto';
import { withApiLoading$ } from '../../../shared/utils/helpers';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ApiLoadingStore } from '../../../shared/stores/loading.store';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private apiSrv: ApiService,
    private store: ApiLoadingStore
  ) { }

  urlPath = "/services/";

  fetchList$ = (query: Query): Observable<ListResponse<Service>> =>
    withApiLoading$<ListResponse<Service>>(
      'get-services',
      this.apiSrv.get<ListResponse<Service>>(
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
