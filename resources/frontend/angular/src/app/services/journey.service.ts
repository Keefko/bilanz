import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Journey} from "../interfaces/journey";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(private httpClient:HttpClient) { }

  all(): Observable<Journey[]>{
    return this.httpClient.get<Journey[]>(environment.api + 'journeys');
  }

  add(data: any): Observable<Journey>{
    return this.httpClient.post<Journey>(environment.api + 'journeys', data);
  }

  update(data: any, id: number): Observable<Journey>{
    return this.httpClient.put<Journey>(environment.api + 'journeys/' + id, data);
  }

  delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(environment.api + 'journeys/' + id);
  }

}
