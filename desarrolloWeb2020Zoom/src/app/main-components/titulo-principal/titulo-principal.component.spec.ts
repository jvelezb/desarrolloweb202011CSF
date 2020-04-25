import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPrincipalComponent } from './titulo-principal.component';

describe('TituloPrincipalComponent', () => {
  let component: TituloPrincipalComponent;
  let fixture: ComponentFixture<TituloPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
