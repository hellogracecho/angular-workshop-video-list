import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video-list/video-list.component';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: Video | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
