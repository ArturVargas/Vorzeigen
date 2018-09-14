import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../providers/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  newUser: any = {};

  constructor(private router: Router, private ss: ServicesService) { }

  ngOnInit() {
  }

  register(data) {
    if (data.password === data.passwordConfirm) {
      this.ss.newUser(data)
       .then( res => {
         console.log(res);
        this.router.navigate(['/profile', 'perfil']);
       }).catch (err => {
        console.log('Error al Crear Usuario');
       });
    } else {
      console.log('Contraseña Incorrecta');
      this.newUser = { };
    }
  }
}
