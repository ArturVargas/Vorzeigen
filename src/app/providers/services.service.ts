import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private itemsCollection: AngularFirestoreCollection<any>;
  public events: any[] = [];
  id: any;

  constructor( public router: Router,
               private afs: AngularFirestore,
               public afAuth: AngularFireAuth) {
                 this.afAuth.authState.subscribe( user => {
                   console.log(user);
                   if (!user) {
                     return;
                   }
                   console.log( user.uid );
                   this.id = user.uid;
                 });
                }

// Logueo de Ususarios.
  fastLogin(proveedor: string) {
    if (proveedor === 'google') {
       return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
    }
  }

  emailLogin( data) {
    return this.afAuth.auth.signInWithEmailAndPassword( data.email, data.password);
  }

// Registro de Ususario por email.
  newUser(data) {
    console.log(data);
    return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword( data.email, data.password)
      .catch( function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

// Cerrar Sesion.
  logout() {
    this.afAuth.auth.signOut()
      .then( data => {
        console.log(data);
        this.router.navigate(['/dashboard']);
      });
  }

// CRUD EVENTOS.

// Trae todos los eventos existentes en la BD.
  getEvents() {
    this.itemsCollection = this.afs.collection<any>('Users');
    return this.itemsCollection.valueChanges();
  }

  createEvent( data ) {
    const body = {
      name: data.name,
      tipe: data.type,
      fechaInit : new Date(),
      fechaFin : new Date(),
      desc: data.description,
      id : this.id
    };
    console.log(data , this.id);
    return this.afs.collection('eventos').add( body);
  }
}
