import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseUrl: string;

  public currentUserSubject: BehaviorSubject<any> = null;

  constructor(
    private _cookieService: CookieService,
    private _baseService: BaseService,
    private http: HttpClient,
    private _sharedDataService: SharedDataService
  ) {
    this.baseUrl = _baseService.baseUrl;
    if (this._cookieService.get('data'))
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(this._cookieService.get('data')));
    else
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(null));
  }

  getData(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  // CHeck user is loggedIn or not
  loggedIn(){
    return false;
  }

  login() {

  }

  logout() {
    // delete stored token
    this._cookieService.delete('token');
    this.currentUserSubject.next(null);
    this._sharedDataService.resetStoreOnLogout();
  }

  changePassword() {

  }

  // Fetch User Role like admin, user, coordinator etc
  getCurrentUserType() {

  }

}
