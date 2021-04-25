import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = environment.URL;

  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor( private http: HttpClient ) { }

  verificaAutenticacion(): Observable<boolean>{

    if ( !localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<Auth>(`${ this.URL }/usuarios/1`)
                  .pipe(
                    map( auth => {
                      this._auth = auth;
                      return true;
                    } )
                  );

  }


  login(): Observable<Auth> {
    return this.http.get<Auth>(`${ this.URL }/usuarios/1`)
            .pipe(
              tap( auth => this._auth = auth),
              tap( auth => localStorage.setItem('token', auth.id) ),
            );
  }

  logout(): void{
      localStorage.clear();
      this._auth = undefined;
  }

}
