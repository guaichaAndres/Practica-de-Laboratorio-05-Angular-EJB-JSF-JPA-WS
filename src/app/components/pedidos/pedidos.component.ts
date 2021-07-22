import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WsJeeService } from 'src/app/services/ws-jee.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnDestroy {
  displayedColumns: string[] = ['nombre', 'categoria','precio','stock'];
  
  public form : FormGroup;
  public bodegas : any =[];
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
  constructor(private wsBodegas : WsJeeService, private formBuilder: FormBuilder, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher 
    ,private router: Router, private RestService : WsJeeService) {
    this.form= this.formBuilder.group({
      bodega : [],
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
    console.log(this.form.controls['bodega'].value.toString());
    this.wsBodegas.getBodegas(this.form.controls['bodega'].value.replace(/\s/g, ' ')).
    subscribe((response : any) => {
this.bodegas = response
console.log(this.bodegas);
    }), (error : any) => {
      console.log(error)
    }
  }


}
