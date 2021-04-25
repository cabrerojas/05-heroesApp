import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate{


  constructor( private _authService: AuthService,
                private _router: Router) {

  }

   canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this._authService.verificaAutenticacion()
                  .pipe(
                   tap( estaAutenticado => {
                     if (!estaAutenticado) {
                       this._router.navigate(['./auth/login']);
                     }
                   })
                  );

      // if ( this._authService.auth.id ) {
      //   return true;

      // }
      // console.log('Bloqueado por el AuthGuard - CanActivate');

      // return false;

   }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

      return this._authService.verificaAutenticacion()
                .pipe(
                  tap( estaAutenticado => {
                    if (!estaAutenticado) {
                      this._router.navigate(['./auth/login']);
                    }
                  })
                );

      // if ( this._authService.auth.id ) {
      //   return true;

      // }
      // console.log('Bloqueado por el AuthGuard - CanLoad');

      // return false;
  }
}
