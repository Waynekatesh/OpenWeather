import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyweatherComponent } from './dailyweather.component';

describe('DailyweatherComponent', () => {
  let component: DailyweatherComponent;
  let fixture: ComponentFixture<DailyweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
