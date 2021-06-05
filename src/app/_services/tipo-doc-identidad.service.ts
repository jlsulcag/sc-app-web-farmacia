import { ITipoDocIdentidad } from './../_interface/ITipoDocIdentidad';
import { environment } from './../../environments/environment';
import { TipoDocIdentidad } from './../_model/TipoDocIdentidad';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoDocIdentidadService {
  url:String=environment.URL_BASE+'api/tipoDocIdentidad';
  constructor(private httpClient: HttpClient) { }

  listar(){    
    return this.httpClient.get<ITipoDocIdentidad>(`${this.url}/findAll`);
  }

  registrar(obj : TipoDocIdentidad){    
    return this.httpClient.post<ITipoDocIdentidad>(`${this.url}/save`, obj);
  }
}
