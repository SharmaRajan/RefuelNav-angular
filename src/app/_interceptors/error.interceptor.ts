import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {NavigationExtras, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {catchError, Observable, throwError} from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);
  const toastr = inject(ToastrService);


  return next(req).pipe(
    catchError((err) => {
      if(err) {
        switch(err.status){
          case 400:
            if(err.error){
              const modalStateErrors = [];
              for(const key in err.error){
                if(err.error[key]){
                  modalStateErrors.push(err.error[key]);
                }
              }
              throw modalStateErrors.flat();
            }else{
              toastr.error(err.error, err.status);
            }
            break;
          case 401:
            toastr.error('Unauthorized', err.status);
            break;
          case 404:
            router.navigateByUrl('/not-found');
            break;
          case 500:
            const navigationExtras : NavigationExtras = {state: {err : err.error}};
            router.navigateByUrl('/server-error',navigationExtras);
            break;
          case 0:
            router.navigateByUrl('/server-error');
            // router.navigateByUrl('/not-found');
            break;
          default:
            toastr.error('Something unexpected went wrong');
            break;
        }
      }
      // return Observable.throw(err.error);
      return throwError(err);
    }
    ));

};
