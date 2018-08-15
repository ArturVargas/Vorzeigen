import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  newUser: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.newUser.password === this.newUser.passwordConfirm) {
      console.log(this.newUser);
      this.router.navigate(['/profile']);
    } else {
      console.log('Contraseña Incorrecta');
      this.newUser = { };
    }
  }
}
