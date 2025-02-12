import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';
import { BusyService } from '../services/busy.service';
import { environment } from '../../../environments/environment.development';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  if(environment.production){}
  const busyService = inject(BusyService);

  busyService.busy();

  return next(req).pipe(
    //delay(500),
    finalize(() => busyService.idle())
  )
};
