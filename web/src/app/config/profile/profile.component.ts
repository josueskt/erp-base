import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { ButtonComponent } from "../../common/button/button.component";
import { CommonModule } from '@angular/common';
import { DimamicformComponent } from '../../common/dimamicform/dimamicform.component';
import { DynamicField } from '../../common/dimamicform/dinamifform.interface';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, ButtonComponent,CommonModule,DimamicformComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private  cdRef = inject( ChangeDetectorRef)
  open:boolean = false
  Open(){
    console.log(this.open +"UNO")
   this.open = !this.open
   console.log(this.open)

  
  
  }
onFormChange($event: any) {
throw new Error('Method not implemented.');
}
onSubmit(data:any) {
  console.log(data)
alert(data)
}
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
    console.log(this.perfil_selected)
  }



  //asdasdasd--------------------------------------
  myForm: FormGroup;
  
  constructor(private fba: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      edad: [null, [Validators.min(18)]],
      aceptaTerminos: [false, Validators.requiredTrue],
      pais: ['', Validators.required]
    });
  }

  formFields:DynamicField[] = [
    {
      name: 'nombre',
      label: 'Nombre completo',
      type: 'text',
      placeholder: 'Ingrese su nombre',
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'text',
    },
    {
      name: 'edad',
      label: 'Edad',
      type: 'number',
    },
    {
      name: 'aceptaTerminos',
      label: 'Acepto los términos y condiciones',
      type: 'boolean',
    },
    {
      name: 'pais',
      label: 'País',
      type: 'select',
      options: [
        { value: 1, label: 'Argentina' },
        { value: 2, label: 'Chile' },
        { value: 3, label: 'México' },
      ],
      placeholder: 'Seleccione un país'
    },    {
      name: 'pais',
      label: 'País',
      type: 'select',
      options: [
        { value: 1, label: 'Argentina' },
        { value: 2, label: 'Chile' },
        { value: 3, label: 'México' },
      ],
      placeholder: 'Seleccione un país'
    },    {
      name: 'pais',
      label: 'País',
      type: 'select',
      options: [
        { value: 1, label: 'Argentina' },
        { value: 2, label: 'Chile' },
        { value: 3, label: 'México' },
      ],
      placeholder: 'Seleccione un país'
    },    {
      name: 'pais',
      label: 'País',
      type: 'select',
      options: [
        { value: 1, label: 'Argentina' },
        { value: 2, label: 'Chile' },
        { value: 3, label: 'México' },
      ],
      placeholder: 'Seleccione un país'
    },    {
      name: 'pais',
      label: 'País',
      type: 'select',
      options: [
        { value: 1, label: 'Argentina' },
        { value: 2, label: 'Chile' },
        { value: 3, label: 'México' },
      ],
      placeholder: 'Seleccione un país'
    },    {
      name: 'pais',
      label: 'País',
      type: 'select',
      options: [
        { value: 1, label: 'Argentina' },
        { value: 2, label: 'Chile' },
        { value: 3, label: 'México' },
      ],
      placeholder: 'Seleccione un país'
    },    {
      name: 'pais',
      label: 'País',
      type: 'select',
      options: [
        { value: 1, label: 'Argentina' },
        { value: 2, label: 'Chile' },
        { value: 3, label: 'México' },
      ],
      placeholder: 'Seleccione un país'
    },    {
      name: 'pais',
      label: 'País',
      type: 'select',
      options: [
        { value: 1, label: 'Argentina' },
        { value: 2, label: 'Chile' },
        { value: 3, label: 'México' },
      ],
      placeholder: 'Seleccione un país'
    },    {
      name: 'pais',
      label: 'País',
      type: 'select',
      options: [
        { value: 1, label: 'Argentina' },
        { value: 2, label: 'Chile' },
        { value: 3, label: 'México' },
      ],
      placeholder: 'Seleccione un país'
    }
  ];

}
