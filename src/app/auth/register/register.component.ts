import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormsModule, Validators} from '@angular/forms'
import {AuthService} from '../../service/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
   email:new FormControl(''),
   password: new FormControl('')
 })

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegister(){
    console.log(this.registerForm.value);
    const {email, password} = this.registerForm.value
    this.authService.onRegister(email, password)

  }

}
