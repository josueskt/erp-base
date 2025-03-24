import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./common/button/button.component";
import { NabvarComponent } from "./common/nabvar/nabvar.component";
import { LoaderService } from './common/service/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NabvarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web';
  private readonly  loader = inject(LoaderService)
  loading=this.loader.loading$
 
}
