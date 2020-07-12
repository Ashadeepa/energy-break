import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-break-home',
  templateUrl: './break-home.component.html',
  styleUrls: ['./break-home.component.scss']
})
export class BreakHomeComponent implements OnInit {

  public category: string;
  public minutes: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
  }

  cancel() {
    this.minutes = null;
  }

  setMinutes(_minutes: number) {
    this.minutes = _minutes;
  }

  start() {
    if (this.minutes != null) {
      this.router.navigate(['/break-content/' + this.category + "/" + this.minutes]);
    }
  }

}
