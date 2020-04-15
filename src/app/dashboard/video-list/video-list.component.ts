import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[] = [];
  highlightedVideo;

  constructor() { }

  ngOnInit(): void {
  }

  setHighlight(videoItem: Video) {
    this.highlightedVideo = videoItem;
  }

}

// observable(): Observable<any> {
//   return this.http.get('mockData.json');
// }

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetails[];
}

export interface ViewDetails {
  age: number;
  region: string;
  date: string;
}
