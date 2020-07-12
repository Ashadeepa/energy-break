import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-break-timings-home',
  templateUrl: './break-timings-home.component.html',
  styleUrls: ['./break-timings-home.component.scss']
})
export class BreakTimingsHomeComponent implements OnInit {

  public selectedIndex: number;
  public selectedRecommendedIndex: number;
  public category: string;

  public recommended: any[] = [
    {
      title: 'Meditation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/images/meditation.png'
    },
    {
      title: 'Eye Exercise',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'assets/images/eye_exercise.png'
    }
  ];

  public allActivities = [
    {
      title: 'Desk Streching',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/images/desk_stretching.png'
    },
    {
      title: 'Dance Fitness',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/images/dance_fitness.png'
    },
    {
      title: 'Eye Excercise',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/images/eye_exercise.png'
    },
    {
      title: 'Inspiring Video',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/images/inspiring_video.png'
    },
    {
      title: 'Meditation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/images/meditation.png'
    },
    {
      title: 'Nap Music',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/images/nap_music.png'
    },
    {
      title: 'Short Story',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/images/short_story.png'
    },
    {
      title: 'Standup Comedy',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/images/standup_comedy.png'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public setRow(_index: number, _category: string) {
    this.category = _category;
    this.selectedRecommendedIndex = null;
    this.selectedIndex = _index;
  }

  public setRecommendedRow(_index: number, _category: string) {
    this.category = _category;
    this.selectedIndex = null;
    this.selectedRecommendedIndex = _index;
  }

  public cancel() {
    this.category = null;
    this.selectedIndex = null;
    this.selectedRecommendedIndex = null;
  }

  public continue() {
    if (this.category != null) {
      this.router.navigate(['/break/' + this.category]);
    }
  }

}
