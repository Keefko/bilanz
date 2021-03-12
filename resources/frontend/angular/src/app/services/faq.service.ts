import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Faq} from "../interfaces/faq";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Faq[]>{
    return this.httpClient.get<Faq[]>(environment.api + 'faqs');
  }

  add(data:any): Observable<Faq>{
    return this.httpClient.post<Faq>(environment.api + 'faqs', data);
  }

  update(data:any, id:number): Observable<Faq>{
    return this.httpClient.put<Faq>(environment.api + 'faqs/' +id, data);
  }

  delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(environment.api + 'faqs/' +id);
  }
}
