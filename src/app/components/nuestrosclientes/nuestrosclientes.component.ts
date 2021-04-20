import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-nuestrosclientes',
  templateUrl: './nuestrosclientes.component.html',
  styleUrls: ['./nuestrosclientes.component.css']
})
export class NuestrosclientesComponent implements OnInit {
  public clientes: Clientes[] = []
  constructor(private _clientesServices: ClientesService) { }

  ngOnInit(): void {
    this.obtenerclietes();
  }

  obtenerclietes() {
    this._clientesServices.getAllTarjetas().subscribe(data => {
      this.clientes = data;
    })
  }

}
