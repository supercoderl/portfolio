import { Injectable } from '@angular/core';
import { Experience, ListResponse, Query } from '../../../shared/dto';
import { withApiLoading$ } from '../../../shared/utils/helpers';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiLoadingStore } from '../../../shared/stores/loading.store';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(
    private http: HttpClient,
    private store: ApiLoadingStore
  ) { }

  urlPath = "/experiences/";

  fetchList$ = (query: Query): Observable<ListResponse<Experience>> =>
    withApiLoading$<ListResponse<Experience>>(
      'get-experiences',
      this.http.get<ListResponse<Experience>>(
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
