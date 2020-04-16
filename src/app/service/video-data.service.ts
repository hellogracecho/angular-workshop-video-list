import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../dashboard/video-list/video-list.component';

const API = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(API + '/videos')
      // ** example of pipe .. convert title to uppercase
      .pipe(map(videos => {
        videos.forEach(video => {
          video.title = video.title.toUpperCase();
        });
        // ** returinING is important !
        return videos;
      }));
  }
}
