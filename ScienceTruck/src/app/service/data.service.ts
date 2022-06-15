import { Injectable } from '@angular/core';
import { Cientifico } from '../interfaces/cientifico.interface';
import { Divulgador } from '../interfaces/divulgador.interface';
import { VideoYT } from '../interfaces/video.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  videoYT!: String;
  divulgador!:Divulgador;
  cientifico!:Cientifico;
  vidvid!:VideoYT[];
  

  constructor() { }
}
