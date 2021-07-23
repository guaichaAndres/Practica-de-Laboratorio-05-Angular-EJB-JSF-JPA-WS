import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WsJeeService {

  constructor(private http: HttpClient) { }

  public registrar(url:string , cedula:any ,correo:any ,contrasena:any){
    const body = new HttpParams()
    .set('cedula', cedula)
    .set('correo', correo)
    .set('contrasena', contrasena);
    return this.http.post(url,body.toString(),{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }
    );
      }

      public modificar(url:string , cedula:any ,nombre:any 
        ,apellido:any,direccion:any,telefono:any,correo:any,contrasena:any){
        const body = new HttpParams()
        .set('cedula', cedula)
        .set('nombre', nombre)
        .set('apellido', apellido)
        .set('direccion', direccion)
        .set('telefono', telefono)
        .set('correo', correo)
        .set('contrasena', contrasena);

        return this.http.put(url,body.toString(),{
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        }
        );
          }
          public anular(url:string , cedula:any){
            const body = new HttpParams()
            .set('cedula', cedula)
            return this.http.put(url,body.toString(),{
              headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
            }
            );
              }
              getBodegas(bodega:any){
                return this.http.get('http://localhost:8080/PracticaDeLaboratorio03EJB-JSF-JPA/rest/pedidos/productos/'+ bodega,{
                  headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                });
              }
              

              public pedir(url:string , body:any){
                return this.http.put(url,body);
                  }
                  getPedidos(cedula:any){
                    return this.http.get('http://localhost:8080/PracticaDeLaboratorio03EJB-JSF-JPA/rest/pedidos/listaPedidos/'+ cedula,{
                      headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    });
                  }
}
