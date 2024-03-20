import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _apiService = inject(ApiService);
  const _router= inject(Router);
  if(_apiService.isAuthenticated()){
    return _apiService.isAuthenticated()
  }else{
    const url = _router.createUrlTree(['/login'])
    return url
  }
}
