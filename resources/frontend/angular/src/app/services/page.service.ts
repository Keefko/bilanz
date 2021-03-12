import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../interfaces/page";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Page[]> {
    return this.httpClient.get<Page[]>(environment.api + 'pages');
  }

  get(name:string): Observable<Page>{
    return this.httpClient.get<Page>(environment.api + 'pages/' + name);
  }

  add(data: any): Observable<Page>{
    return this.httpClient.post<Page>(environment.api + 'pages', data);
  }

  update(data: any, id:number): Observable<Page>{
    return this.httpClient.put<Page>(environment.api + 'pages/' + id, data);
  }

  delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(environment.api + 'pages/' + id);
  }

}
