import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../_services/auth.service";
import {ToastrService} from "ngx-toastr";

export const authGuard: CanActivateFn = (route, state) => {
  // THis is the new way to inject components inside javascript function
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);

  if(authService.currentUser()) {
    return true;
  }else {
    // toastr.error('You shall not pass!');
    toastr.error('You are not logged in');
    return false;
  }
};
