import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfesorComponent } from './add-profesor.component';

describe('AddProfesorComponent', () => {
  let component: AddProfesorComponent;
  let fixture: ComponentFixture<AddProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
