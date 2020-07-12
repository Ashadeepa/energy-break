import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-break-completion',
  templateUrl: './break-completion.component.html',
  styleUrls: ['./break-completion.component.scss']
})
export class BreakCompletionComponent implements OnInit {

  @Input('category') public category: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/break-timings']);
  }

}
