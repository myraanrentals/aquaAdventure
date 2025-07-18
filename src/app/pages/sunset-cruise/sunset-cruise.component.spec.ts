import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunsetCruiseComponent } from './sunset-cruise.component';

describe('SunsetCruiseComponent', () => {
  let component: SunsetCruiseComponent;
  let fixture: ComponentFixture<SunsetCruiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunsetCruiseComponent]
    });
    fixture = TestBed.createComponent(SunsetCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
