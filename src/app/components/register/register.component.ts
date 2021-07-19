import { Component, OnInit } from '@angular/core';
import { WsJeeService } from 'src/app/services/ws-jee.service';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public form : FormGroup;

  constructor(private RestService : WsJeeService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      cedula : [],
      correo : [],
      contrasena : []
    });
  }

  ngOnInit() {
  }
  public registrarUsuario(){
    this.RestService.registrar('http://localhost:8080/PracticaDeLaboratorio03EJB-JSF-JPA/rest/cliente/registrar',
    this.form.value
    )
    .subscribe(respuesta =>{
      console.log('Registro Correcto');
    })
  }
}