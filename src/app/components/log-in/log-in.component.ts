import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { WsJeeLoginService } from 'src/app/services/ws-jee-login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
public form : FormGroup;
  constructor(private RestService : WsJeeLoginService, private formBuilder: FormBuilder,private router: Router) {
    
    this.form = this.formBuilder.group({
      correo : [],
      contrasena : []
    });
   }

  ngOnInit(): void {
 
  }

public enviarCredenciales(){
  this.RestService.login('http://localhost:8080/PracticaDeLaboratorio03EJB-JSF-JPA/rest/cliente/login',
  this.form.controls['correo'].value, this.form.controls['contrasena'].value
  )
  .subscribe(respuesta =>{
    console.log('Inicio Correcto');
    this.router.navigate(['/inicio']);

  })
}
}
