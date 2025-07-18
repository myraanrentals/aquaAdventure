import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCruiseComponent } from './party-cruise.component';

describe('PartyCruiseComponent', () => {
  let component: PartyCruiseComponent;
  let fixture: ComponentFixture<PartyCruiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartyCruiseComponent]
    });
    fixture = TestBed.createComponent(PartyCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
