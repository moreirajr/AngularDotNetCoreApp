import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPedidoComponent } from './checkout-pedido.component';

describe('CheckoutPedidoComponent', () => {
  let component: CheckoutPedidoComponent;
  let fixture: ComponentFixture<CheckoutPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
