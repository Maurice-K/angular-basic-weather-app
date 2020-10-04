import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHandlerComponent } from './weather-handler.component';

describe('WeatherHandlerComponent', () => {
  let component: WeatherHandlerComponent;
  let fixture: ComponentFixture<WeatherHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
