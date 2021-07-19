import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { WsJeeLoginService } from 'src/app/services/ws-jee-login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
public form : FormGroup;
  constructor(private RestService : WsJeeLoginService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      correo : [],
      contrasena : []
    });
   }

  ngOnInit(): void {
 
  }

public enviarCredenciales(){
  this.RestService.login('http://localhost:8080/PracticaDeLaboratorio03EJB-JSF-JPA/rest/cliente/login',
  this.form.value
  )
  .subscribe(respuesta =>{
    console.log('Inicio Correcto');
  })
}
}
