import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nabvar',
  imports: [ButtonComponent,RouterLink,CommonModule],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent implements OnInit {
  
  readonly auth = inject( AuthService)
  open= false
  menu_des: any[] = [
 
   
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
     document.body.classList.remove('theme-dark', 'theme-white','theme-blue','theme-purple');
     document.body.classList.add(theme);
   }
   ngOnInit() {
     const savedTheme = localStorage.getItem('theme') || 'theme-orange';
     this.setTheme(savedTheme);
    this.menu_des =  this.auth.getUserInfo().routs

     console.log( this.auth.getUserInfo().routs)
     
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
