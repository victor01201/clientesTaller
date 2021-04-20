import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = "https://fast-caverns-63520.herokuapp.com/api/user"

  constructor(private http: HttpClient) {

  }

  getAllTarjetas(): Observable<any> {
    return this.http.get<Clientes[]>(this.url);
  }
}
