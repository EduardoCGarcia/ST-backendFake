import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoYT } from '../interfaces/video.interface';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideosService {

  private apiURL = 'http://localhost:3000/entretenimiento_videos';
  constructor(private http: HttpClient) { }

  getVideos():Observable<VideoYT[]  >{
    return this.http.get<VideoYT[]>(this.apiURL)
  }
}
