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
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formChange = new EventEmitter<any>();

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(values => {
      this.formChange.emit(values);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['close_open']) {
      this.cdRef.detectChanges();
    }
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
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
  }
}
