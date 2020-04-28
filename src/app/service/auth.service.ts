import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {Router} from '@angular/router'
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public AuthFire: AngularFireAuth, private router: Router) { }

    async onLogin(email:string, password:string){
      try {
        await this.AuthFire.signInWithEmailAndPassword(email, password)
        this.router.navigate(['/home'])
      } catch (error) {
        console.log(error)
      }
    }

    async onRegister(email:string, password:string){
       try {
          await this.AuthFire.createUserWithEmailAndPassword(email, password)
         this.router.navigate(['/login'])
       } catch (error) {
         console.log(error)
       }
    }

    async logout(){
      try {
        await this.AuthFire.signOut();
        this.router.navigate(['/login'])
      } catch (error) {
         console.log(error)
      }
    }

    getCurrentUser(){
      return this.AuthFire.authState.pipe(first()).toPromise();
    }
}


