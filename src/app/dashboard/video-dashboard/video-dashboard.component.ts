import { Component, OnInit } from '@angular/core';
import { Video } from '../video-list/video-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  dataForVideoList: Video[] = [];
  selectedVideo: Video;

  constructor(http: HttpClient) {
    http.get<Video[]>(API)
      .subscribe(videos => (this.dataForVideoList = videos));
  }

  ngOnInit(): void {
  }

  onHandlingSelectedVideo(video: Video) {
    // console.log(e);
    this.selectedVideo = video;
  }
}


const API = 'https://api.angularbootcamp.com/videos';
