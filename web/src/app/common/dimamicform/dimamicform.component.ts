import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicField } from './dinamifform.interface';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dimamicform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dimamicform.component.html',
  styleUrl: './dimamicform.component.css'
})
export class DimamicformComponent implements OnInit, OnChanges {
  constructor(private cdRef: ChangeDetectorRef) {}

  @Input() formGroup!: FormGroup;
  @Input() fields: DynamicField[] = [];

  @Input() close_open: boolean = false;
  @Output() close_openChange = new EventEmitter<boolean>();
  @Input() initialData: any = {}; 
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formChange = new EventEmitter<any>();

  ngOnInit() {
    // this.formGroup.valueChanges.subscribe(values => {
    //   this.formChange.emit(values);
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['close_open']) {
      this.cdRef.detectChanges();
    }
    if (changes['initialData'] ) {
    }
    if (this.initialData && this.formGroup) {
      this.formGroup.patchValue(this.initialData);
    }
  }


  onSubmit() {
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
    this.close()
      
    }
  }

  getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.getControl(controlName);
    return control && control.errors ? control.errors[errorName] : false;
  }

  isFieldInvalid(controlName: string): boolean {
    const control = this.getControl(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  close() {
    this.close_openChange.emit(false);
   this.formGroup.reset()
   
  }


// Verifica si una opción está seleccionada
isOptionSelected(controlName: string, optionValue: any): boolean {
  const currentValues = this.getSelectedValues(controlName);
  return currentValues.includes(optionValue);
}

// Alterna la selección de una opción
toggleSelection(controlName: string, optionValue: any): void {
  const control = this.getControl(controlName);
  let currentValues: any[] = control.value || [];
  
  if (currentValues.includes(optionValue)) {
    // Remover si ya está seleccionado
    currentValues = currentValues.filter(val => val !== optionValue);
  } else {
    // Agregar si no está seleccionado
    currentValues = [...currentValues, optionValue];
  }
  
  control.setValue(currentValues.length ? currentValues : null);
  control.markAsTouched();
}

getSelectedValues(controlName: string): any[] {
  const control = this.getControl(controlName);
  return control?.value || [];
}






getSelectedLabels(field: DynamicField): {value: any, label: string}[] {
  if (!field.options || !this.formGroup.get(field.name)?.value) return [];
  
  const selectedValues = this.formGroup.get(field.name)?.value || [];
  return field.options.filter(option => 
    selectedValues.includes(option.value)
  );
}

removeSelection(controlName: string, valueToRemove: any): void {
  const control = this.getControl(controlName);
  const currentValue: any[] = control.value || [];
  const newValue = currentValue.filter(val => val !== valueToRemove);
  control.setValue(newValue.length ? newValue : null); 
}



//  //asdasdasd--------------------------------------
//  myForm: FormGroup;
  
//  constructor(private fba: FormBuilder) {
//    this.myForm = this.fb.group({
//      //nombre: ['', [Validators.required, Validators.minLength(3)]],
//      //email: ['', [Validators.required, Validators.email]],
//      //edad: [null, [Validators.min(18)]],
//     // aceptaTerminos: [false, Validators.requiredTrue],
//      pais: ['', Validators.required],
//categorias: [[]]
//    });
//  }

//  formFields:DynamicField[] = [

// {
//   name: 'categorias',
//   label: 'Categorías',
//   type: 'multiselect',
//   options: [
//     { value: 1, label: 'Electrónica' },
//     { value: 2, label: 'Hogar' },
//     { value: 3, label: 'Deportes' },
//     { value: 4, label: 'Ropa' }
//   ],
//   placeholder: 'Seleccione categorías'
// }
//    // {
//    //   name: 'nombre',
//    //   label: 'Nombre completo',
//    //   type: 'text',
//    //   placeholder: 'Ingrese su nombre',
//    // },
//    // {
//    //   name: 'email',
//    //   label: 'Correo electrónico',
//    //   type: 'text',
//    // },
//    // {
//    //   name: 'edad',
//    //   label: 'Edad',
//    //   type: 'number',
//    // },
//    // {
//    //   name: 'aceptaTerminos',
//    //   label: 'Acepto los términos y condiciones',
//    //   type: 'boolean',
//    // },
//    {
//      name: 'pais',
//      label: 'País',
//      type: 'select',
//      options: [
//        { value: 1, label: 'Argentina' },
//        { value: 2, label: 'Chile' },
//        { value: 3, label: 'México' },
//      ],
//      placeholder: 'Seleccione la ruta'
//    }
//  ];
// <app-dimamicform [(close_open)]="open" [formGroup]="myForm" [fields]="formFields" (formSubmit)="onSubmit($event)"
//   (formChange)="onFormChange($event)">
// // </app-dimamicform>

}
