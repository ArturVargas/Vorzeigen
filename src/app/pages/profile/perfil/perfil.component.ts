import { Component, OnInit } from '@angular/core';
// import { ServicesService } from '../../../providers/services.service'; 
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userData = {};

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( data => {
     // console.log(data);
      this.userData = data;
    });

   }

  ngOnInit() {
  }

}
