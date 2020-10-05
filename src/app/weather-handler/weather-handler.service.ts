import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, exhaustMap, map as rxMap, switchMap, take, tap} from 'rxjs/operators';
import { Weather, WeatherAdapter } from '../shared/models/weather.model';
import { environment } from '../../environments/environment'

@Injectable()
export class WeatherHandlerService {

    public weatherCards: Weather[] = [];
    public weatherDetailBehaviorSubject = new BehaviorSubject<string>('New York');

    private apiKey = environment.weatherStackAPIKey
    private baseUrl = 'https://api.weatherstack.com/current';

    constructor(private http: HttpClient, private adapter: WeatherAdapter) {}

    public weatherDetail$ = this.weatherDetailBehaviorSubject.asObservable().pipe(
        tap((data) => { 
            console.log(data) 
        }),
        switchMap(data => this.getCurrentWeatherDetails(data))
    )

    public setCurrentWeatherDetails(city: string) {
        this.weatherDetailBehaviorSubject.next(city)        
    }   
    
    public getCurrentWeatherDetails(city: string): Observable<Weather> | Observable<any> {
        return this.http.get(`${this.baseUrl}?access_key=${this.apiKey}&query=${city}`).pipe(
            tap(data => console.log('Before using rxMap', data)),
            rxMap((data: any) => {
                if (data.location) {
                    // Minimizing the data we pass over.
                    let weatherObj  = {
                        location: data.location.name ? data.location.name : null ,
                        temperature: data.current.temperature ? this.celsitusToFarenheight(data.current.temperature) : null,
                        feelsLike: data.current.feelslike ? this.celsitusToFarenheight(data.current.feelslike) : null,
                        weatherDescription: data.current.weather_descriptions[0] ? data.current.weather_descriptions[0] : null,
                        weatherIcon: data.current.weather_icons[0] ? data.current.weather_icons[0] : null,
                    }
                    return this.adapter.adapt(weatherObj)
                }
            }),
            tap(data => console.log('After using rxMap w/adapter', data))
        )
    }

    private celsitusToFarenheight(temperature: number) {
        return (temperature * (9/5)) + 32;
    }
}

