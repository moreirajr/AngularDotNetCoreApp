import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const baseUrl = 'http://localhost:57031/api/';

export interface ComportamentoCliente {
  Id: number,
  IP: string,
  Browser: string,
  NomePagina: string,
  Parametros: string
}


@Injectable()
export class ComportamentoClienteService {

  constructor(private http: HttpClient) { }

  comportamentoCliente: ComportamentoCliente;

  save(pagina: string, parametros: string) {

    this.http.get<{ ip: string }>('https://jsonip.com')
      .subscribe(data => {

        this.comportamentoCliente = {
          Id: 0,
          Browser: window.navigator.userAgent,
          IP: data.ip,
          NomePagina: pagina,
          Parametros: parametros
        };

        console.log('Comportamento: ', this.comportamentoCliente);

        return this.http
          .post<ComportamentoCliente>(baseUrl + 'ComportamentoCliente/Salvar', this.comportamentoCliente, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe(data => { });
      });
  }

  getComportamentos() {
    return this.http
      .get<ComportamentoCliente>(baseUrl + 'ComportamentoCliente/Listar');
  }
}
