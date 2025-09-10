import { Component, inject } from '@angular/core';
import { WeatherStore } from '../../../state/weather/weather.store';

@Component({
  selector: 'app-temperature-view',
  imports: [],
  templateUrl: './temperature-view.html',
  styleUrl: './temperature-view.scss'
})
export class TemperatureView {
  protected weatherStore = inject(WeatherStore);
  protected weather = this.weatherStore.weather;
  protected cityData = this.weatherStore.cityData;
}
