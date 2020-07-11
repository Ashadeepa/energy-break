import { Injectable } from '@angular/core';
import { HttpRequest, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoaderService } from './loader.service';
import { exhaustMap, take, timeout, catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  headers: HttpHeaders;
  private totalRequests = 0;

  constructor(
    private _loaderService: LoaderService,
    private _authService: AuthService ,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.totalRequests++;
    this._loaderService.show()
    return this._authService.currentUserSubject.pipe(
      take(1),
      exhaustMap(currentUserSubject => {
        if (!currentUserSubject) {
          return next.handle(req);
        }
        else {
          this.headers = new HttpHeaders({
            authorization: 'Bearer ' + currentUserSubject.token
          });
        }
        const modifiedReq = req.clone({
          headers: this.headers
        })
        return next.handle(modifiedReq)
      }),
      timeout(25000),
      catchError(error => {
        if (error.error.message.includes('JWT expired')) {
          this._authService.logout();
          this.router.navigate(['/login']);
        }
        return throwError(error)
      }),
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this._loaderService.hide();
        }
      })
    );
  }
}
