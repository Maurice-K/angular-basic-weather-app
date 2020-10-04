import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Tile } from '../shared/interface'
import { Weather } from '../shared/models/weather.model';
import { WeatherHandlerService } from './weather-handler.service';
import { WEATHER_HANDLER } from './../shared/constants'


@Component({
  selector: 'app-weather-handler',
  templateUrl: './weather-handler.component.html',
  styleUrls: ['./weather-handler.component.scss'],
  providers: [WeatherHandlerService]
})
export class WeatherHandlerComponent implements OnInit, OnDestroy {

  public weather: Weather;
  private weatherHandlerSubscription$: Subscription;

  title: string = WEATHER_HANDLER.TITLE;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private weatherHandlerService: WeatherHandlerService) { }

  ngOnInit(): void {
    // Initial Load
    this.weatherHandlerSubscription$ = this.weatherHandlerService.weatherDetail$.subscribe({
      next: data => this.weather = data,
      error: (error) => console.log(`There was a ${error}`),
      complete: () => console.log('Completed Weather Lookup')
    })

  }

  ngOnDestroy(): void {
    this.weatherHandlerSubscription$.unsubscribe()
  }

}
