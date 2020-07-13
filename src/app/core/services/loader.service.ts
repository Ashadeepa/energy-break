import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<boolean>();
  loaderState = this.loaderSubject.asObservable();

  // private timeInMinutes = new Subject<number>();
  private timeInMinutes = new BehaviorSubject<number>(10);
  remainingTime = this.timeInMinutes.asObservable();

  constructor() {
  }

  show() {
    this.loaderSubject.next(true);
  }
  hide() {
    this.loaderSubject.next(false);
  }

  setTime(minutes: number){
    this.timeInMinutes.next(minutes);
  }

}
