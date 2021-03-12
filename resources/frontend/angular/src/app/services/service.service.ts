import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "../interfaces/service";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient:HttpClient) { }

  all(): Observable<Service[]>{
    return this.httpClient.get<Service[]>(environment.api + 'services');
  }

  get(name:string): Observable<Service>{
    return this.httpClient.get<Service>(environment.api + 'services/' + name);
  }

  add(data:any): Observable<Service>{
    return this.httpClient.post<Service>(environment.api + 'services', data);
  }

  update(data:any, id:number): Observable<Service>{
    return this.httpClient.put<Service>(environment.api + "services/" + id ,data);
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(environment.api + 'services/' + id);
  }
}
