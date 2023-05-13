import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDisplayComponent } from './students-display.component';

describe('StudentsDisplayComponent', () => {
  let component: StudentsDisplayComponent;
  let fixture: ComponentFixture<StudentsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsDisplayComponent]
    });
    fixture = TestBed.createComponent(StudentsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
