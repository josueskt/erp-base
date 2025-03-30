import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-icon-selector',
  imports: [CommonModule,FormsModule],
  templateUrl: './icon-selector.component.html',
  styleUrl: './icon-selector.component.css'
})
export class IconSelectorComponent {
  @Output() selecionado = new EventEmitter<string>()
   selectedIcon: string = ''; // Ícono seleccionado
  showDropdown: boolean = false; // Estado del dropdown

  icons = [
    // Interfaz y navegación
    'fa-home', 'fa-user', 'fa-users', 'fa-user-circle', 'fa-user-plus', 'fa-user-minus',
    'fa-user-check', 'fa-user-times', 'fa-user-secret', 'fa-address-book', 'fa-id-badge',
    'fa-id-card', 'fa-bars', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-th', 'fa-th-large',
    'fa-th-list', 'fa-list', 'fa-list-ul', 'fa-list-ol', 'fa-table', 'fa-clipboard',
    'fa-clipboard-list', 'fa-edit', 'fa-pencil-alt', 'fa-trash', 'fa-trash-alt',
  
    // Archivos y documentos
    'fa-file', 'fa-file-alt', 'fa-file-archive', 'fa-file-audio', 'fa-file-code',
    'fa-file-excel', 'fa-file-image', 'fa-file-pdf', 'fa-file-powerpoint', 'fa-file-video',
    'fa-file-word', 'fa-folder', 'fa-folder-open', 'fa-save', 'fa-copy', 'fa-cut',
    'fa-paste', 'fa-paperclip', 'fa-sticky-note', 'fa-bookmark', 'fa-book', 'fa-journal-whills',
  
    // Comunicación
    'fa-envelope', 'fa-envelope-open', 'fa-paper-plane', 'fa-comment', 'fa-comments',
    'fa-comment-dots', 'fa-comment-alt', 'fa-phone', 'fa-phone-alt', 'fa-mobile', 
    'fa-mobile-alt', 'fa-tablet', 'fa-tablet-alt', 'fa-laptop', 'fa-desktop', 'fa-wifi',
  
    // Multimedia
    'fa-image', 'fa-images', 'fa-camera', 'fa-camera-retro', 'fa-video', 'fa-music',
    'fa-headphones', 'fa-microphone', 'fa-microphone-alt', 'fa-volume-up', 'fa-volume-down',
    'fa-volume-mute', 'fa-play', 'fa-pause', 'fa-stop', 'fa-fast-forward', 'fa-fast-backward',
    'fa-redo', 'fa-undo', 'fa-sync', 'fa-spinner', 'fa-hourglass', 'fa-stopwatch',
  
    // Redes sociales
    'fa-facebook', 'fa-twitter', 'fa-instagram', 'fa-linkedin', 'fa-youtube',
    'fa-github', 'fa-stack-overflow', 'fa-twitch', 'fa-discord', 'fa-reddit', 'fa-whatsapp',
  
    // Finanzas y comercio
    'fa-shopping-cart', 'fa-shopping-bag', 'fa-shopping-basket', 'fa-credit-card',
    'fa-money-bill', 'fa-money-check', 'fa-dollar-sign', 'fa-euro-sign', 'fa-pound-sign',
    'fa-coins', 'fa-gift', 'fa-tags', 'fa-receipt', 'fa-wallet', 'fa-cash-register',
  
    // Transporte y viajes
    'fa-car', 'fa-bus', 'fa-truck', 'fa-motorcycle', 'fa-bicycle', 'fa-plane',
    'fa-ship', 'fa-subway', 'fa-taxi', 'fa-train', 'fa-road', 'fa-map', 'fa-map-marker',
    'fa-map-marked', 'fa-location-arrow', 'fa-globe', 'fa-compass', 'fa-route',
  
    // Salud y bienestar
    'fa-heart', 'fa-heartbeat', 'fa-ambulance', 'fa-hospital', 'fa-clinic-medical',
    'fa-pills', 'fa-syringe', 'fa-thermometer', 'fa-user-md', 'fa-stethoscope',
    'fa-first-aid', 'fa-hands-helping', 'fa-pray', 'fa-ribbon', 'fa-diagnoses',
  
    // Tecnología y programación
    'fa-code', 'fa-terminal', 'fa-laptop-code', 'fa-database', 'fa-server',
    'fa-network-wired', 'fa-microchip', 'fa-robot', 'fa-bug', 'fa-cloud', 'fa-cloud-upload-alt',
    'fa-cloud-download-alt', 'fa-satellite', 'fa-wifi', 'fa-bluetooth', 'fa-signal', 'fa-lock',
  
    // Educación y ciencia
    'fa-graduation-cap', 'fa-university', 'fa-book-reader', 'fa-microscope',
    'fa-atom', 'fa-dna', 'fa-flask', 'fa-lightbulb', 'fa-chalkboard-teacher', 
    'fa-globe', 'fa-language', 'fa-calculator', 'fa-clipboard-list', 'fa-brain',
  
    // Emoticonos y símbolos
    'fa-smile', 'fa-smile-beam', 'fa-laugh', 'fa-grin', 'fa-meh', 'fa-frown',
    'fa-angry', 'fa-sad-cry', 'fa-surprise', 'fa-handshake', 'fa-hand-peace',
    'fa-thumbs-up', 'fa-thumbs-down', 'fa-praying-hands', 'fa-hand-rock', 'fa-hand-paper',
    'fa-hand-scissors', 'fa-hand-lizard', 'fa-hand-pointer', 'fa-hand-spock',
  
    // Seguridad y alertas
    'fa-exclamation', 'fa-exclamation-circle', 'fa-exclamation-triangle', 'fa-bomb',
    'fa-shield-alt', 'fa-fire', 'fa-skull', 'fa-user-secret', 'fa-balance-scale',
    'fa-gavel', 'fa-key', 'fa-lock', 'fa-unlock', 'fa-passport', 'fa-eye', 'fa-eye-slash',
  
    // Misceláneos
    'fa-chess', 'fa-chess-knight', 'fa-chess-rook', 'fa-chess-bishop', 'fa-chess-queen',
    'fa-chess-king', 'fa-dice', 'fa-dice-d20', 'fa-gamepad', 'fa-headset',
    'fa-tree', 'fa-leaf', 'fa-mountain', 'fa-sun', 'fa-moon', 'fa-cloud-sun',
    'fa-cloud-moon', 'fa-snowflake', 'fa-wind', 'fa-tint', 'fa-umbrella',
  
    // Deportes y actividades
    'fa-basketball-ball', 'fa-football-ball', 'fa-baseball-ball', 'fa-volleyball-ball',
    'fa-running', 'fa-swimmer', 'fa-cycling', 'fa-futbol', 'fa-dumbbell', 'fa-skating',
    'fa-skiing', 'fa-snowboarding', 'fa-table-tennis', 'fa-bowling-ball', 'fa-golf-ball'
  ];
  

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectIcon(icon: string) {
    this.selecionado.emit(icon)
    this.selectedIcon = icon;
    this.showDropdown = false; // Cerrar el dropdown al seleccionar
  }
}
