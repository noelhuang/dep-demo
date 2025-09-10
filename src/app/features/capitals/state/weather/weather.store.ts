import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Country } from '@yusifaliyevpro/countries/types';

export interface WeatherState { 
  data: any;
  cityData: any;
};

export const WeatherStore = signalStore(
  { providedIn: 'root' },
  withDevtools('countries'),
  withState<WeatherState>({ data: null, cityData: null }),
  withComputed(({ data }) => ({
    weather: computed(() => {
      return data();
    }),
  })),
  withMethods((store) => ({
    set(data: any) {
      patchState(store, { data });
    },
    setCityData(cityData: any) {
      patchState(store, { cityData });
    }
  })),
);
