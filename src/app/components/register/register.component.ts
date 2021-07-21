import { Component, OnInit } from '@angular/core';
import { WsJeeService } from 'src/app/services/ws-jee.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public form1 : FormGroup;

  constructor(private RestService : WsJeeService, private formBuilder: FormBuilder,private router: Router) { 
    this.form1= this.formBuilder.group({
      cedula1 : [],
      correo1 : [],
      contrasena1 : []
    });
  }

  ngOnInit() {
  }
  public registrarUsuario(){
    this.RestService.registrar('http://localhost:8080/PracticaDeLaboratorio03EJB-JSF-JPA/rest/cliente/registrar',
    this.form1.controls['cedula1'].value,
    this.form1.controls['correo1'].value, 
    this.form1.controls['contrasena1'].value
    )
    .subscribe(respuesta =>{
      console.log('Registro Correcto');
      this.router.navigate(['/login']);
    })
  }
}