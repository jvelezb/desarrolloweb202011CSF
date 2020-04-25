import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerComponenteComponent } from './tercer-componente.component';

describe('TercerComponenteComponent', () => {
  let component: TercerComponenteComponent;
  let fixture: ComponentFixture<TercerComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercerComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
