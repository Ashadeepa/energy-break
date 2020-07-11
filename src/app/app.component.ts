import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'energy-break';

  private subscription: Subscription;
  loader: Observable<boolean>;
  show = false;

  constructor(
    private _loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscription = this._loaderService.loaderState.subscribe(data => {
      this.show = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
