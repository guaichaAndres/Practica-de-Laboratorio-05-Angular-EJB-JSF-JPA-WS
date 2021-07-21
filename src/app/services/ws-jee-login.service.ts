import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WsJeeLoginService {

  constructor(private http: HttpClient) { }

  public login(url:string,correo:any, contrasena:any ){
     const body = new HttpParams()
  .set('correo', correo)
  .set('contrasena', contrasena);

   return this.http.post(url,body.toString(),{
  headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
}
);
  }
}
