import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string
  password:string
   
    constructor(private router:Router,private authService:AuthService) {
   
   
     }
     showError:boolean=false
   
   
   
    ngOnInit(): void {
    }
    login(): void {
      if(!this.username||!this.password)
        {
          this.showError=true;
        }
        else
        {
      this.authService.login(this.username, this.password).subscribe(
       
        (response) => {
          if (response.role === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else if (response.role === 'ORGANIZER') {
            this.router.navigate(['/organizer']);
          }
          // Handle other roles or scenarios if needed
        },
        (error) => {
          // Handle login error if needed
        }
      );
    }
    }

}
