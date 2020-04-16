import { Component, OnInit } from '@angular/core';
import { Video } from '../video-list/video-list.component';
import { VideoDataService } from 'src/app/service/video-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  // dataForVideoList: Video[] = [];
  // ** async pipe + Observable
  dataForVideoList: Observable<Video[]>;
  selectedVideo: Video;

  constructor(service: VideoDataService) {
    // service.loadVideos().subscribe(videos => (this.dataForVideoList = videos));
    this.dataForVideoList = service.loadVideos();
  }

  ngOnInit(): void {
  }

  onHandlingSelectedVideo(video: Video) {
    // console.log(e);
    this.selectedVideo = video;
  }
}
