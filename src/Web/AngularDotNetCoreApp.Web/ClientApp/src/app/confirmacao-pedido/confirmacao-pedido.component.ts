import { Component, OnInit } from '@angular/core';
import { ComportamentoClienteService } from '../comportamento-cliente/comportamento-cliente.service';

@Component({
  selector: 'app-confirmacao-pedido',
  templateUrl: './confirmacao-pedido.component.html',
  styleUrls: ['./confirmacao-pedido.component.css']
})
export class ConfirmacaoPedidoComponent implements OnInit {

  constructor(private comportamentoClienteService: ComportamentoClienteService) {
    comportamentoClienteService.save('confirmacao-pedido', '');
  }

  ngOnInit() {
  }

}
