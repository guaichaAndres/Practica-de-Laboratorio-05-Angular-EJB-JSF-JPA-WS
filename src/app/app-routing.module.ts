import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { AnularComponent } from './components/anular/anular.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { VerPedidosComponent } from './components/ver-pedidos/ver-pedidos.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'modificar', component: ModificarComponent },
  { path: 'anular', component: AnularComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'ver-pedidos', component: VerPedidosComponent },
  { path: '**', component: NoPageFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
