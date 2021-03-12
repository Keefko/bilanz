import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Refund} from "../interfaces/refund";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class RefundService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Refund[]>{
    return this.httpClient.get<Refund[]>(environment.api + 'refunds');
  }

  add(data: any): Observable<Refund>{
    return this.httpClient.post<Refund>(environment.api + 'refunds',data);
  }

  update(data: any, id: number): Observable<Refund>{
    return this.httpClient.put<Refund>(environment.api + 'refunds/' + id,data);
  }

  delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(environment.api + 'refunds/' + id);
  }
}
