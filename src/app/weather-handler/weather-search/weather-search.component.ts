import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { WeatherHandlerService } from '../weather-handler.service';

// DUMMY COMPONENT
@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private weatherHandlerService: WeatherHandlerService) { }

  ngOnInit(): void {

  }

  public onWeatherSearchSubmit(weatherForm: NgForm) {
    this.weatherHandlerService.setCurrentWeatherDetails(weatherForm.value.weatherSearch);
    weatherForm.reset()
  }
}
