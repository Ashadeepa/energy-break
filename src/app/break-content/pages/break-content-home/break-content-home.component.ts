import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-break-content-home',
  templateUrl: './break-content-home.component.html',
  styleUrls: ['./break-content-home.component.scss']
})
export class BreakContentHomeComponent implements OnInit, OnDestroy {

  private _unsubscribe = new Subject<boolean>();

  public category: string;
  public minutes: number;
  public isCompleted: boolean = false;
  public start = 0;
  public remainingTime: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private _loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.minutes = parseInt(this.route.snapshot.paramMap.get('minutes'));

    let timerCount = this.minutes * 60 * 1000; // this.minutes * 5 * 1000;

    this._loaderService.remainingTime.pipe(
      takeUntil(this._unsubscribe)
    ).subscribe(
      data => this.remainingTime = data,
      error => console.log(error)
    );

    setTimeout(() => {
      this.isCompleted = true;
      let timeInMinutes = this.remainingTime - this.minutes;
      this._loaderService.setTime(timeInMinutes);
    }, timerCount);
  }

  cancel() {
    this.location.back();
  }

  end() {
    this.router.navigate(['/break-timings']);
  }

  ngOnDestroy() {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }

}
