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
      description: 'To help you manage stress and feel relaxed.',
      image: '/assets/images/meditation.png'
    },
    {
      title: 'Eye Exercise',
      description: 'Exercises to relax and strengthen your eye muscles.',
      image: 'assets/images/eye_exercise.png'
    }
  ];

  public allActivities = [
    {
      title: 'Desk Stretching',
      description: 'Exercises To Relax And Strengthen Your Eye Muscles.',
      image: '/assets/images/desk_stretching.png'
    },
    {
      title: 'Dance Fitness',
      description: 'Hit the dance floor while you are at your desk.',
      image: '/assets/images/dance_fitness.png'
    },
    {
      title: 'Eye Exercise',
      description: 'Exercises to relax and strengthen your eye muscles.',
      image: '/assets/images/eye_exercise.png'
    },
    {
      title: 'Inspiring Video',
      description: 'Beating the odds and pushing through the challenges.',
      image: '/assets/images/inspiring_video.png'
    },
    {
      title: 'Meditation',
      description: 'To help you manage stress and feel relaxed.',
      image: '/assets/images/meditation.png'
    },
    {
      title: 'Nap Music',
      description: 'Boost memory and enhance creativity with musical power naps.',
      image: '/assets/images/nap_music.png'
    },
    {
      title: 'Short Story',
      description: 'Handpicked stories for a quick read. Go ahead and enjoy!',
      image: '/assets/images/short_story.png'
    },
    {
      title: 'Stand-up Comedy',
      description: 'Laughter improves blood flow and reduce your blood pressure.',
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
