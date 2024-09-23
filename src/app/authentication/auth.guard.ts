import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationServiceService } from '../serivces/authentication-service.service';
import { UIHelperService } from '../shared/helpers/u-i-helper.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authenticationService = inject(AuthenticationServiceService);
  const uiserviceHelper = inject(UIHelperService);
  const router = inject(Router);

  if (authenticationService.IsLoggedIn()) {
    if (authenticationService.IsTokenExpired()) {
      uiserviceHelper.SwalMessageWarning('Warning', 'Your session has expired. Please log in again.').then(result => {
        if (result.isConfirmed) {
          authenticationService.LogOut();
          router.navigate(['/signin']);
        }
      });
      return false;
    } else {
      return true;
    }
  } else {
    uiserviceHelper.SwalMessageWarning('Warning', 'Please LogIn To See the Details').then(result => {
      if (result.isConfirmed) {
        authenticationService.LogOut();
      }
    });
    return false;
  }
};
