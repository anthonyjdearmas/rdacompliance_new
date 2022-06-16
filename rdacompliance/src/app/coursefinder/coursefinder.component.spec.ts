import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefinderComponent } from './coursefinder.component';

describe('CoursefinderComponent', () => {
  let component: CoursefinderComponent;
  let fixture: ComponentFixture<CoursefinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
