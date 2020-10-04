import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { WeatherHandlerService } from '../weather-handler.service';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private weatherHandlerService: WeatherHandlerService) { }

  ngOnInit(): void {

  }

  public onWeatherSearchSubmit() {
    this.weatherHandlerService.setCurrentWeatherDetails('Chicago');
    console.log('Submit');
  }

}
