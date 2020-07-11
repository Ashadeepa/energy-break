import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-break-timings-home',
  templateUrl: './break-timings-home.component.html',
  styleUrls: ['./break-timings-home.component.scss']
})
export class BreakTimingsHomeComponent implements OnInit {

  public recommended: any[] = [
    {
      title: 'Meditation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: 'Eye Excercise',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ];

  public allActivities = [
    {
      title: 'Desk Streching',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: 'Dance Fitness',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: 'Eye Excercise',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: 'Inspiring Video',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: 'Meditation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: 'Nap Music',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: 'Short Story',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: 'Standup Comedy',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
