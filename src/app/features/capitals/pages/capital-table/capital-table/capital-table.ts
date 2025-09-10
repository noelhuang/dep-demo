import { Component, computed, inject, Signal } from '@angular/core';
// component
import { DepTable } from '@alliander/dep-components';
import { AgGridAngular } from 'ag-grid-angular';
import { CountriesStore } from '../../../../countries/state/countries.store';
import { RowClickedEvent } from 'ag-grid-community';
import { WeatherFetcher } from '../../../services/capital/weather-fetcher';
import { WeatherStore } from '../../../state/weather/weather.store';

@Component({
  selector: 'app-capital-table',
  imports: [AgGridAngular, DepTable],
  templateUrl: './capital-table.html',
  styleUrl: './capital-table.scss'
})
export class CapitalTable {

  protected countriesStore; 
  protected weatherStore = inject(WeatherStore);
  protected weatherFetcher = inject(WeatherFetcher);

  protected data = computed(() => this.countriesStore.capitals());
  constructor() {
    this.countriesStore = inject(CountriesStore);
  }

  protected onRowClicked($event: RowClickedEvent<any,any>) {
    console.log($event);
    this.weatherFetcher.fetchWeatherByLatLon($event.data.lat, $event.data.lng).subscribe(
      data => {
        this.weatherStore.set(data);
        this.weatherStore.setCityData($event.data);
      }
    )
  }
}