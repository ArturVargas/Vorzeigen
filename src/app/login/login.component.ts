import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginData);
    if (this.loginData.length !== 0) {
      this.router.navigate(['/profile']);
    } else {
      console.log('Contraseñe o Usuario Incorrecto');
    }
  }

}
