import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WsJeeService {

  constructor(private http: HttpClient) { }

  public registrar(url:string , body: any){
    return this.http.post(url,body);
      }
      
}
