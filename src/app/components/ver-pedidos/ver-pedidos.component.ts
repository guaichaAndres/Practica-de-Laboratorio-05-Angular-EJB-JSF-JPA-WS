import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-ver-pedidos',
  templateUrl: './ver-pedidos.component.html',
  styleUrls: ['./ver-pedidos.component.css']
})
export class VerPedidosComponent implements OnDestroy {
  displayedColumns: string[] = ['id','estado','productos','subtotal','iva','total'];
  public form : FormGroup;
  public pedidos : any =[];
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
  constructor(private wsPedidos : WsJeeService, private formBuilder: FormBuilder,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher 
   ,private router: Router, private RestService : WsJeeService ,private fb:FormBuilder) {
    this.form= this.formBuilder.group({
      cedula : [],
    });
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
  
    shouldRun = true;
    ngOnInit(): void {
      console.log(this.form.controls['cedula'].value.toString());
      this.wsPedidos.getPedidos(this.form.controls['cedula'].value).
      subscribe((response : any) => {
  this.pedidos = response
  console.log(this.pedidos);
      }), (error : any) => {
        console.log(error)
      }
    }

}
