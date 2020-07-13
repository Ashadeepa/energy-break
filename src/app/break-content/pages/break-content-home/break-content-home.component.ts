import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-break-content-home',
  templateUrl: './break-content-home.component.html',
  styleUrls: ['./break-content-home.component.scss']
})
export class BreakContentHomeComponent implements OnInit {

  public category: string;
  public minutes: number;
  public isCompleted: boolean = false;
  public start = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.minutes = parseInt(this.route.snapshot.paramMap.get('minutes'));

    let timerCount = this.minutes * 60 * 1000;

    setTimeout(() => {
      this.isCompleted = true;
    }, timerCount);
  }

  cancel() {
    this.location.back();
  }

  end() {
    this.router.navigate(['/break-timings']);
  }

}
