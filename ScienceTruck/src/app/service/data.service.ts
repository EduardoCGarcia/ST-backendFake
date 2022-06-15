import { Injectable } from '@angular/core';
import { Cientifico } from '../interfaces/cientifico.interface';
import { Divulgador } from '../interfaces/divulgador.interface';
import { Producto } from '../interfaces/producto.interface';
import { UserResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  videoYT!: String;
  divulgador!:Divulgador;
  cientifico!:Cientifico;
  producto!:Producto;
  usuario !:string;
  

  constructor() { }
}
