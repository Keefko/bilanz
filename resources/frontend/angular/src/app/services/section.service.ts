import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Section} from "../interfaces/section";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private httpClient:HttpClient) { }

  all(): Observable<Section[]>{
    return this.httpClient.get<Section[]>(environment.api + 'sections');
  }

  get(id:number): Observable<Section>{
    return this.httpClient.get<Section>(environment.api + 'sections/' +id);
  }

  update(id:number, data: any): Observable<Section>{
    return this.httpClient.put<Section>(environment.api + 'sections/' +id, data);
  }
}
