import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyCDKNmNRUJekyW5YqbxEiKWORk8XNFDsrU",
      authDomain: "bookshelves-d32c1.firebaseapp.com",
      databaseURL: "https://bookshelves-d32c1.firebaseio.com",
      projectId: "bookshelves-d32c1",
      storageBucket: "",
      messagingSenderId: "810250317893",
      appId: "1:810250317893:web:d42bb2a979beef7758f32c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
