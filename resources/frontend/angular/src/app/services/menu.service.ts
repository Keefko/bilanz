import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Menu} from "../interfaces/menu";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) {}

  all(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>( environment.api + 'menus');
  }

  add(data: any): Observable<Menu>{
    return this.httpClient.post<Menu>( environment.api + 'menus', data);
  }

  update(data:any, id:number): Observable<Menu>{
    return this.httpClient.put<Menu>( environment.api + 'menus/' + id, data);
  }

  delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(environment.api + 'menus/' + id);
  }
}

