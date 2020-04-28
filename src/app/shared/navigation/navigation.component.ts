import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
   isLogged = false;
   user:any ;
   user$:Observable<any>;
  constructor(private authService :AuthService) {
    this.user$ = this.authService.AuthFire.user;
   }

  async ngOnInit() {
   this.user = await this.authService.getCurrentUser();
   if(this.user){
     this.isLogged = true
     console.log(this.user);
   }
  }

  logout(){
    this.authService.logout();
  }

}
