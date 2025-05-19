import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { ButtonComponent } from "../../common/button/button.component";
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from "../../common/breadcrumb/breadcrumb.component";
import Swal from 'sweetalert2';
import { DimamicformComponent } from "../../common/dimamicform/dimamicform.component";
import { DynamicField } from '../../common/dimamicform/dinamifform.interface';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, ButtonComponent, CommonModule, BreadcrumbComponent, DimamicformComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private  cdRef = inject( ChangeDetectorRef)
  open:boolean = false
  datos :{ida?:string} = {}
  profile_Routs:{id_u_r:string,ruta:string}[] = []
  perfiles:any[] = []
  perfil_selected = ''
  private fb = inject(FormBuilder)
  private readonly profileS = inject(ProfileService)

  formFields:DynamicField[] = [
      
    {
      name: 'Rutas',
      label: 'Agregar Ruta',
      type: 'multiselect',
      options: [
        
       
      ],
      placeholder: 'Seleccione categorías'
    },
    
  ]

  myForm: FormGroup

  constructor(private fba: FormBuilder) {
       this.myForm = this.fba.group({
         ida: ['',[] ],
        Rutas: [[]]
       });
     }
  Open(){
    if(!this.perfil_selected){
      Swal.fire({title:'selecione un perfil',showCloseButton:false})
      return
    }
    this.profileS.get_RoutsInNotProfile(this.perfil_selected).subscribe((e)=>{
      this.datos.ida = this.perfil_selected + ""
      this.formFields[0].options = e
      this.open = !this.open

    })


  }
nuevaRuta(){
  Swal.fire({
            position: 'center',
            icon: 'success',
            title:  "",
            showConfirmButton: false,
            timer: 2000,
          });
}
onFormChange($event: any) {
throw new Error('Method not implemented.');
}
onSubmit(data:any) {
  alert(data)

}
 

ngOnInit(): void {
  this.profileS.getProfile().subscribe({next:(value)=> {
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
    
    this.profileS.get_RoutsByProfile(this.perfil_selected).subscribe((e:any)=>{
      this.profile_Routs = e
    })  
    console.log(this.perfil_selected)
  }



 
}
