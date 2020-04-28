import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {AuthService} from '../../service/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password:new FormControl('')
  })
  constructor(private authService :AuthService) { }

  ngOnInit(): void {
  }
  
 async  onLogin(){
   try {
    const {email, password} = this.loginForm.value ;
    await this.authService.onLogin(email, password)
   }catch(error){

   }
  }
}
