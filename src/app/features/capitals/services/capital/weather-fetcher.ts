import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherFetcher {
  private httpClient = inject(HttpClient);

  public fetchWeatherByLatLon(lat: number, lon: number) {
    return this.httpClient.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m`);
  }
}
