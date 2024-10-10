import {effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  visible = false;

  constructor() {
    effect(() => {
      window.localStorage.setItem('menuClose', JSON.stringify(this.menuClose()));
    });
  }

  menuClose = signal<string>(
    JSON.parse(window.localStorage.getItem('menuClose') ?? 'null')
  );

  updateSideNavMode() {
    this.menuClose.update((value) => (value === 'close' ? 'null' : 'close'));
  }

  hide(){
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
