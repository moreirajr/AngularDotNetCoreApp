import { Component, OnInit } from '@angular/core';
import { ComportamentoClienteService } from '../comportamento-cliente/comportamento-cliente.service';


@Component({
  selector: 'app-checkout-pedido',
  templateUrl: './checkout-pedido.component.html',
  styleUrls: ['./checkout-pedido.component.css']
})
export class CheckoutPedidoComponent implements OnInit {

  constructor(private comportamentoClienteService: ComportamentoClienteService) {
    comportamentoClienteService.save('checkout-pedido', '');
  }

  ngOnInit() {
  }

}
