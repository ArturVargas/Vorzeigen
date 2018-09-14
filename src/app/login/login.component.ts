import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../providers/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any = {};

  constructor(private router: Router, private serviceLog: ServicesService) { }

  ngOnInit() {
  }

  login(data) {
    console.log(data);
    if ( data === 'google') {
      this.serviceLog.fastLogin(data)
       .then( res => {
        console.log(res);
        this.router.navigate(['/profile', 'perfil']);
       }).catch( (err) => {
        console.log('Contraseña o Usuario Incorrecto');
        console.log(err);
      });
    } else {
      this.serviceLog.emailLogin(data)
      .then( res => {
        console.log(res);
        this.router.navigate(['/profile', 'perfil']);
      }).catch( (err) => {
        console.log('Contraseña o Usuario Incorrecto');
       console.log(err);
      });
    }
  }

}
