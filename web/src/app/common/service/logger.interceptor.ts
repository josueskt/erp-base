import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { LoaderService } from './loader.service';
import { inject } from '@angular/core';

export const loggerInter: HttpInterceptorFn = (req, next) => {
    const loader = inject(LoaderService);
    loader.show();
    console.log(loader.loading$)
  const token = localStorage.getItem('token');

  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(authReq).pipe(
    tap((response:any) => {
      if (response && response.body && response.body.message) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title:   response.body.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }),
    catchError((error) => {

        Swal.fire({
            position: "center",
            icon: "error",
            title: ""+ error.error.message,
            
            showConfirmButton: false,
            timer: 2000
          });
          
    

      return throwError(() => error);
    })
    , finalize(() => loader.hide())
  );
};
