import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WsJeeLoginService {

  constructor(private http: HttpClient) { }

  public login(url:string ){
    const body = new HttpParams()
  .set('correo', "kguaicha@est.ups.edu.ec")
  .set('contrasena', "kguaicha");

   return this.http.post(url,body.toString(),{
  headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
}
);
  }
}
