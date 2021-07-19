import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WsJeeLoginService {

  constructor(private http: HttpClient) { }

  public login(url:string , body: any){
return this.http.post(url,body);
  }
}
