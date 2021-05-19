import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformnoteComponent } from './addformnote.component';

describe('AddformnoteComponent', () => {
  let component: AddformnoteComponent;
  let fixture: ComponentFixture<AddformnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
