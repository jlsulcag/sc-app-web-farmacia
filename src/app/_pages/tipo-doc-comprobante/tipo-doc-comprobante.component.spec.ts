import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocComprobanteComponent } from './tipo-doc-comprobante.component';

describe('TipoDocComprobanteComponent', () => {
  let component: TipoDocComprobanteComponent;
  let fixture: ComponentFixture<TipoDocComprobanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDocComprobanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
