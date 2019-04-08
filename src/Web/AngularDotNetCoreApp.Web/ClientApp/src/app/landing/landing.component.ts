import { Component, OnInit } from '@angular/core';
import { ComportamentoClienteService } from '../comportamento-cliente/comportamento-cliente.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private comportamentoClienteService: ComportamentoClienteService) {
    comportamentoClienteService.save('landing', '');
  }

  ngOnInit() {
  }

}
