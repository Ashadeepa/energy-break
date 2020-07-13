import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Subject} from 'rxjs';
import {LoaderService} from '../../../core/services/loader.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.scss']
})
export class SettingsHomeComponent implements OnInit {

  public selectedIndex: number;
  public selectedRecommendedIndex: number;
  public category: string;
  private _unsubscribe = new Subject<boolean>();

  public remainingTime: number;
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
    private location: Location,
    private _loaderService: LoaderService
  ) { }

  ngOnInit() {
    this._loaderService.remainingTime.pipe(
      takeUntil(this._unsubscribe)
    ).subscribe(
      data => this.remainingTime = data,
      error => console.log(error)
    );
  }

  public cancel() {
    this.selectedIndex = null;
    this.location.back();
  }

  public setRow(_index: number) {
    this.selectedIndex = _index;
  }

  ngOnDestroy() {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }
}
