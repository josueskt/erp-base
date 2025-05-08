import { Component, inject } from '@angular/core';
import { AuthService } from '../../common/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   private readonly auth = inject(AuthService)
   private readonly route = inject(Router)

   ngOnInit(): void {

    if(!this.auth.getToken()){
      this.route.navigate(['/login']).then(() => {
      });
    }
   }

}
