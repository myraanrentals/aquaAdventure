import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSunsetCruiseComponent } from './best-sunset-cruise.component';

describe('BestSunsetCruiseComponent', () => {
  let component: BestSunsetCruiseComponent;
  let fixture: ComponentFixture<BestSunsetCruiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestSunsetCruiseComponent]
    });
    fixture = TestBed.createComponent(BestSunsetCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
