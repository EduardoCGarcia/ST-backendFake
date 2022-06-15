import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoYT } from '../interfaces/video.interface';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideosService {

  private apiURLJS = 'http://localhost:3000/videos_JS';
  private apiURLQU = 'http://localhost:3000/videos_QU';
  private apiURLSH = 'http://localhost:3000/videos_SH';
  constructor(private http: HttpClient) { }

  getVideosJS():Observable<VideoYT[]  >{
    return this.http.get<VideoYT[]>(this.apiURLJS)
  }
  getVideosQU():Observable<VideoYT[]  >{
    return this.http.get<VideoYT[]>(this.apiURLQU)
  }
  getVideosSH():Observable<VideoYT[]  >{
    return this.http.get<VideoYT[]>(this.apiURLSH)
  }
}
