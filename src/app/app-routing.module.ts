import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { AcercaComponent } from './componentes/main/acerca/acerca.component';
import { ProductosComponent } from './componentes/main/productos/productos.component';
import { ContactoComponent } from './componentes/main/contacto/contacto.component';
import { LoginComponent } from './componentes/main/login/login.component';
import { RegistroComponent } from './componentes/main/registro/registro.component';
import { InicioComponent } from './componentes/main/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'acerca', component: AcercaComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
