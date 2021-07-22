import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WsJeeService } from 'src/app/services/ws-jee.service';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnDestroy {
  public form : FormGroup;
  mobileQuery: MediaQueryList;
  fillerNav = [
    {name:"Inicio", route: "/inicio",icon:"home"},
    {name:"Mi perfil", route: "/modificar",icon:"perm_contact_calendar"},
    {name:"Desactivar Cuenta", route: "/anular",icon:"delete"},
    {name:"Realizar un Pedido", route: "/pedidos",icon:"add_shopping_cart"},
    {name:"Ver mis Pedidos", route: "/ver-pedidos",icon:"credit_card"},
    {name:"Log Out", route: "/login",icon:"exit_to_app"}

]

 

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private formBuilder: FormBuilder,private router: Router, private RestService : WsJeeService) {
      this.form= this.formBuilder.group({
        cedula : [],
        nombre : [],
        apellido : [],
        direccion : [],
        telefono : [],
        correo : [],
        contrasena : []
      });
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
  public modificarUsuario(){
    this.RestService.modificar('http://localhost:8080/PracticaDeLaboratorio03EJB-JSF-JPA/rest/cliente/modificar',
    this.form.controls['cedula'].value,
    this.form.controls['nombre'].value, 
    this.form.controls['apellido'].value,
    this.form.controls['direccion'].value, 
    this.form.controls['telefono'].value, 
    this.form.controls['correo'].value, 
    this.form.controls['contrasena'].value, 
    )
    .subscribe(respuesta =>{
      console.log('Modificación Correcta');
      this.router.navigate(['/inicio']);
    })
  }
}
