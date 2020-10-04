import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/adapter';

export class Weather {
    constructor(
        public location: string,
        public temperature: number,
        public feelsLike: number,
        public weatherDescription: string,
        public weatherIcon: string
    ) {}
}

@Injectable({
    providedIn: 'root',
})
export class WeatherAdapter implements Adapter<Weather> {
    adapt(item: any): Weather {
        return new Weather(item.location, item.temperature, item.feelsLike, item.weatherDescription, item.weatherIcon); 
    }
}
