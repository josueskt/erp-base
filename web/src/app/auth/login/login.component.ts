import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../common/button/button.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../common/service/auth.service';
@Component({
  selector: 'app-login',
  imports: [ButtonComponent,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngOnInit(): void {
    
    if(this.auth.getToken()){
      this.route.navigate(['/home']).then(() => {
        
      });
    }
  }
  readonly loginS = inject(LoginService)
  readonly route = inject(Router)
  readonly auth = inject(AuthService)
  userForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  });
  login(){
    if(this.userForm.value){
      this.loginS.login(this.userForm.value).subscribe({next:(value)=> {
          this.auth.setToken(value.token)
          this.route.navigate(['/home']).then(() => {
            window.location.reload()
          });
      },})
    }
      

  }
}
