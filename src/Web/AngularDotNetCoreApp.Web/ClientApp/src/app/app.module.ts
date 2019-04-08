import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { CheckoutPedidoComponent } from './checkout-pedido/checkout-pedido.component';
import { ConfirmacaoPedidoComponent } from './confirmacao-pedido/confirmacao-pedido.component';
import { ComportamentoClienteComponent } from './comportamento-cliente/comportamento-cliente.component';
import { ComportamentoClienteService } from './comportamento-cliente/comportamento-cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LandingComponent,
    CheckoutPedidoComponent,
    ConfirmacaoPedidoComponent,
    ComportamentoClienteComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'landing', component: LandingComponent, pathMatch: 'full' },
      { path: 'checkout-pedido', component: CheckoutPedidoComponent, pathMatch: 'full' },
      { path: 'confirmacao-pedido', component: ConfirmacaoPedidoComponent, pathMatch: 'full' },
    ])
  ],
  providers: [ComportamentoClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
