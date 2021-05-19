import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformnoteComponent } from './editformnote.component';

describe('EditformnoteComponent', () => {
  let component: EditformnoteComponent;
  let fixture: ComponentFixture<EditformnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditformnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
