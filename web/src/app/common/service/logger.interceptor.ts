import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
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
    catchError((error) => {
    //   if (error.status === 401) {
    //     alert('No autorizado (401)');
    //   } else if (error.status === 403) {
    //     alert('Acceso prohibido (403)');
    //   } else if (error.status === 404) {
    //     alert('Recurso no encontrado (404)');
    //   } else if (error.status === 500) {
    //     alert('Error interno del servidor (500)');
    //   } else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "error"+error.message,
            showConfirmButton: false,
            timer: 1500
          });
          
          
     // }

      // Puedes hacer un redirect, limpiar token, etc.
      // if (error.status === 401) {
      //   localStorage.removeItem('token');
      //   window.location.href = '/login';
      // }

      return throwError(() => error);
    })
    , finalize(() => loader.hide())
  );
};
