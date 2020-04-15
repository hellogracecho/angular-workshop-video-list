import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video-list/video-list.component';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  @Input() item: Video;
  @Input() highlightedVideoId: string;

  constructor() { }

  ngOnInit(): void {
  }
}
