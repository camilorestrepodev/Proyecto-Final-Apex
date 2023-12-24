import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './componentes/head/head.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AcercaComponent } from './componentes/main/acerca/acerca.component';
import { ProductosComponent } from './componentes/main/productos/productos.component';
import { ContactoComponent } from './componentes/main/contacto/contacto.component';
import { LoginComponent } from './componentes/main/login/login.component';
import { RegistroComponent } from './componentes/main/registro/registro.component';
import { InicioComponent } from './componentes/main/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent, HeadComponent, MainComponent, FooterComponent, AcercaComponent, ProductosComponent, ContactoComponent, LoginComponent, RegistroComponent, InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
