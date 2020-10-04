import { AfterContentChecked, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Weather } from 'src/app/shared/models/weather.model';
import { WeatherHandlerService } from '../weather-handler.service';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() public weather;

  constructor(private weatherHandlerService: WeatherHandlerService) { }

  ngOnInit(): void {
  }  
}
