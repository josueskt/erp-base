
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../common/button/button.component';
import { IconSelectorComponent } from "../../common/icon-selector/icon-selector.component";
import { MenuconfigService } from './menuconfig.service';

@Component({
  selector: 'app-menuconfig',
  imports: [ReactiveFormsModule, ButtonComponent, IconSelectorComponent],
  templateUrl: './menuconfig.component.html',
  styleUrl: './menuconfig.component.css'
})
export class MenuconfigComponent {
  menuForm: FormGroup;
  menus: any[] = [];

  constructor(private fb: FormBuilder , private menuConfigS:MenuconfigService) {
    // Inicializamos el formulario
    this.menuForm = this.fb.group({
      id_route:[null],
      name: ['', Validators.required],
      direction: [''],
      icon: ['', Validators.required],
      subMenu: this.fb.array([]) // Inicializamos el array de submenús
    });
  }

  ngOnInit(): void {
    this.menuConfigS.getConfigMenu().subscribe((e:any)=>{
      this.menus = e
    })
  }
    
  // Getter para acceder fácilmente al FormArray de submenús
  get subMenus() {
    return this.menuForm.get('subMenu') as FormArray;
  }

  // Método para agregar un submenú
  addSubMenu() {
    const subMenuGroup = this.fb.group({
      id_route:[null],
      name: ['', Validators.required],
      direction: [''],
      icon: ['', Validators.required]
    });
    this.subMenus.push(subMenuGroup);
  }

  // Método para eliminar un submenú
  removeSubMenu(index: number) {
    this.subMenus.removeAt(index);
  }

  // Método para agregar un menú
  addMenu() {
    if (this.menuForm.valid) {
      this.menus.push(this.menuForm.value);
      console.log(this.menuForm.value) 
      this.menuConfigS.createConfigMenu(this.menuForm.value).subscribe((e)=>{

        this.menuForm.reset();
        this.subMenus.clear();
      })
      
    }
  }

  // Método para editar un menú
  editMenu(index: number) {
    const menuToEdit = this.menus[index];
    this.menuForm.patchValue({
      id_route:menuToEdit.id_route,
      name: menuToEdit.name,
      direction: menuToEdit.direction,
      icon: menuToEdit.icon
    });
    this.subMenus.clear();
    menuToEdit.submenu.forEach((sub: any) => {
      this.subMenus.push(this.fb.group({
        name: [sub.name],
        id_route: [sub.id_route],
        direction: [sub.direction],
        icon: [sub.icon]
      }));
    });
    console.log(menuToEdit)
  }

  // Método para eliminar un menú
  deleteMenu(index: number) {
    this.menus.splice(index, 1);
  }

  toggleAccordion(index: number) {
    this.menus[index].open = !this.menus[index].open;
  }
}
