import {effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkModeSignal', JSON.stringify(this.darkModeSignal()));
    });
  }

  darkModeSignal = signal<string>(
    JSON.parse(window.localStorage.getItem('darkModeSignal') ?? 'null')
  );

  updateDarkMode() {
    this.darkModeSignal.update((value) => (value === 'dark' ? 'null' : 'dark'));
  }

}
