import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { ButtonComponent } from "../../common/button/button.component";

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  perfiles:any[] = []
  perfil_selected = ''
  private fb = inject(FormBuilder)
  private readonly profileS = inject(ProfileService)

ngOnInit(): void {
  this.profileS.getProfile().subscribe({next:(value)=> {
      console.log(value)
      this.perfiles = value
      
  },})  
}

  form: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(/\S+/) // evita solo espacios
      ]
    ]
  });
  submit(){
    alert(this.form.value)
  }

  cambio_perfil(id:string){
    this.perfil_selected  =id
    
  }

}
