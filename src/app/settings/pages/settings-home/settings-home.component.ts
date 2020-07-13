import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.scss']
})
export class SettingsHomeComponent implements OnInit {

  public selectedIndex: number;

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
    private location: Location
  ) { }

  ngOnInit() {
  }

  public cancel() {
    this.selectedIndex = null;
    this.location.back();
  }

  public setRow(_index: number) {
    this.selectedIndex = _index;
  }

}
