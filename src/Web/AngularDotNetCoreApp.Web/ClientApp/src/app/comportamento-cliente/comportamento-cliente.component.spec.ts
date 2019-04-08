import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComportamentoClienteComponent } from './comportamento-cliente.component';

describe('ComportamentoClienteComponent', () => {
  let component: ComportamentoClienteComponent;
  let fixture: ComponentFixture<ComportamentoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComportamentoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComportamentoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
