import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Tile } from '../shared/interface'
import { Weather } from '../shared/models/weather.model';
import { WeatherHandlerService } from './weather-handler.service';
import { WEATHER_HANDLER } from './../shared/constants'
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-weather-handler',
  templateUrl: './weather-handler.component.html',
  styleUrls: ['./weather-handler.component.scss'],
  providers: [WeatherHandlerService]
})
export class WeatherHandlerComponent implements OnInit, OnDestroy {

  public weather: Weather;
  public weatherCards: Weather[];

  private weatherHandlerSubscription$: Subscription;

  title: string = WEATHER_HANDLER.TITLE;

  constructor(private weatherHandlerService: WeatherHandlerService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.weatherCards = this.weatherHandlerService.weatherCards;

    // Initial Load
    this.weatherHandlerSubscription$ = this.weatherHandlerService.weatherDetail$.subscribe({
      next: (data) => {
        if (data) {
          this.weatherCards.unshift(data);
        } else {
          return
        }
      },
      error: (error) => { 
        this.snackBar.open(`There was a ${error}`, '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
        console.log(`There was a ${error}`)
       },
      complete: () => console.log('Completed Weather Lookup')
    })
  }

  ngOnDestroy(): void {
    this.weatherHandlerSubscription$.unsubscribe()
  }

  public weatherTrackBy(index, weather) {
    return weather.location;    
  }

}
