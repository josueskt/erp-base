import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nabvar',
  imports: [ButtonComponent,RouterLink,CommonModule],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {
  menu_des: any[] = [
  {
    name: 'Opción 1',
    direcion: "/profe/crear_autor", icono: "fas fa-user-plus"

  },
    {
      name: 'Opción 1',
      open: false,
      icono: "fas fa-user-plus",
      subMenu: [
        {
          name: 'Subopción 1-1',
          open: false,
           icono: "fas fa-user-plus",
          subMenu: [
            { name: 'SubSubopción 1-1-1' ,
               icono: "fas fa-user-plus",
               direcion: "/profe/crear_autor",
             },
            { name: 'SubSubopción 1-1-2',
               icono: "fas fa-user-plus",
               direcion: "/profe/crear_autor",
             }
          ]
        },
        {
          name: 'Subopción asdasdasdasd',
         direcion: "/profe/crear_autor", icono: "fas fa-user-plus"

        
        }
      ]
    }
   
  ];

  toggleSubMenu(item: any): void {
    item.open = !item.open;
  }




  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('buton') button!: ElementRef;
  Is_open = false
  changeTheme(theme: string) {
     localStorage.setItem('theme', theme);
     this.setTheme(theme);
   }
   setTheme(theme: string) {
     document.body.classList.remove('theme-dark', 'theme-white','theme-blue');
     document.body.classList.add(theme);
   }
   ngOnInit() {
     const savedTheme = localStorage.getItem('theme') || 'theme-orange';
     this.setTheme(savedTheme);
     
   }
 
   @HostListener('document:click', ['$event'])
   onDocumentClick(event: MouseEvent) {
    const clickedInsideMenu = this.menu?.nativeElement.contains(event.target);
    const clickedInsidebuton = this.button?.nativeElement.contains(event.target);
    if(clickedInsidebuton){
    this.menu.nativeElement.classList.remove('-translate-x-full')

    }
     if (!clickedInsideMenu && !clickedInsidebuton  ) {
      console.log("no entro")
    this.menu.nativeElement.classList.add('-translate-x-full')

     }
   }

}
