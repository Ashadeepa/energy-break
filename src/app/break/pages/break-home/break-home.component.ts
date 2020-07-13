import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-break-home',
  templateUrl: './break-home.component.html',
  styleUrls: ['./break-home.component.scss']
})
export class BreakHomeComponent implements OnInit, OnDestroy {

  private _unsubscribe = new Subject<boolean>();

  public category: string;
  public minutes: number;

  public remainingTime: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private _loaderService: LoaderService
  ) { }

  ngOnInit() {
    // Fetching category from route
    this.category = this.route.snapshot.paramMap.get('category');

    // Fetching Remaining time
    this._loaderService.remainingTime.pipe(
      takeUntil(this._unsubscribe)
    ).subscribe(
      data => this.remainingTime = data,
      error => console.log(error)
    );
  }

  cancel() {
    this.minutes = null;
    this.location.back();
  }

  setMinutes(_minutes: number) {
    this.minutes = _minutes;
  }

  start() {
    if (this.minutes != null) {
      this.router.navigate(['/break-content/' + this.category + "/" + this.minutes]);
    }
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
