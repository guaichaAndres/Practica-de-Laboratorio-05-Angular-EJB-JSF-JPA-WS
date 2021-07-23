import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WsJeeService } from 'src/app/services/ws-jee.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnDestroy {
  title = 'FormArray Example in Angular Reactive forms';
 
  displayedColumns: string[] = ['nombre', 'categoria','precio','stock'];
  
  public form : FormGroup;
public skillsForm: FormGroup;
public pedido: FormGroup;

 

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
  constructor(private wsBodegas : WsJeeService, private formBuilder: FormBuilder,
     changeDetectorRef: ChangeDetectorRef, media: MediaMatcher 
    ,private router: Router, private RestService : WsJeeService ,private fb:FormBuilder) {
      this.skillsForm = this.fb.group({
        name: '',
        skills: this.fb.array([]) ,
      });
    this.form= this.formBuilder.group({
      bodega : [],
    });
    this.pedido= this.formBuilder.group({
      cedula : [],
      nombre : [],
      estado : [],
      productos: [{

      }]
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
    this.wsBodegas.getBodegas(this.form.controls['bodega'].value).
    subscribe((response : any) => {
this.bodegas = response
console.log(this.bodegas);
    }), (error : any) => {
      console.log(error)
    }
  }
  public hacerPedido(){
    this.RestService.pedir('http://localhost:8080/PracticaDeLaboratorio03EJB-JSF-JPA/rest/pedidos/pedir',
    this.pedido.value
 
    )
    .subscribe(respuesta =>{
      console.log('Se generó el pedido Correctamente');
      this.router.navigate(['/inicio']);
    })
  }
get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
