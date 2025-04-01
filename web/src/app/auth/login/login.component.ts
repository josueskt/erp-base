import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../common/button/button.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  imports: [ButtonComponent,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly loginS = inject(LoginService)
  userForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  });
  login(){
    if(this.userForm.value){
      this.loginS.login(this.userForm.value).subscribe({next(value) {
          localStorage.setItem('token',value.token) 
      },})
    }
      

  }
}
