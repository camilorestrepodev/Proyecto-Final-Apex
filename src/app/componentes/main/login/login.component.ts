import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  username: string = '';
  password: string = '';

  login() {
    // Aquí puedes agregar la lógica de inicio de sesión, por ejemplo, enviar la información al servidor.
    console.log(`Usuario: ${this.username}, Contraseña: ${this.password}`);
  }
  ngOnInit() {
    this.loginService.getUsers().subscribe(
      (data) => {
        console.log('Usuarios obtenidos:', data);
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }
}
