import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../interfaces/contact";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }


  get(id: number): Observable<Contact>{
    return this.httpClient.get<Contact>(environment.api + 'contacts/' + id);
  }

  update(data: any, id:number): Observable<Contact>{
    return this.httpClient.put<Contact>(environment.api + 'contacts/' + id, data);
  }

}
