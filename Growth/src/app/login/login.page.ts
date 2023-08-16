import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() {
    let app = initializeApp(environment.firebaseConfig);
   }

  ngOnInit() {
  }

  login(email?: string, password?: string) {
    //TODO form para enviar datos
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, 'prueba@correo.com', '12345678')
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user ', user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

}
