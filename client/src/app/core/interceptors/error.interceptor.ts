import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const snackbar = inject(SnackbarService);


  return next(req).pipe(
    catchError((e: HttpErrorResponse) => {
      if (e.status === 400) {
        if (e.error.errors) {
          const modelStateErrors = [];
          for (const key in e.error.errors) {
            if (e.error.errors[key]) {
              modelStateErrors.push(e.error.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        } else {
          snackbar.error(e.error.title || e.error)
        }

      }
      if (e.status === 401) {
        snackbar.error(e.error.title || e.error)
      }
      if (e.status === 404) {
        router.navigateByUrl("/not-found")
      }
      if (e.status === 500) {
        const navigationExtras: NavigationExtras = { state: { error: e.error } }
        router.navigateByUrl("/server-error", navigationExtras)
      }
      return throwError(() => e);
    })
  );
};
