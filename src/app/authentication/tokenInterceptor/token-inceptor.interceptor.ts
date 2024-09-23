import { HttpInterceptorFn } from '@angular/common/http';
import { SessionHelper } from '../../shared/helpers/session-helper';

export const tokenInceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const myAuthToken = SessionHelper.getToken();

  if (myAuthToken) {
    const authTokenReq = req.clone({
      setHeaders: {Authorization: 'bearer '+myAuthToken},
    });
    return next(authTokenReq);
  }
  return next(req);
};
