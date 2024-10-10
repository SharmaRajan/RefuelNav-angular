import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { NavComponent } from "./components/nav/nav.component";
import {NgClass} from "@angular/common";
import {NewNavComponent} from "./components/new-nav/new-nav.component";
import {DarkModeService} from "./_services/dark-mode.service";
import {NewFooterComponent} from "./components/new-footer/new-footer.component";
import {NavTestComponent} from "./components/nav/nav-test/nav-test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, NgClass, NewNavComponent, NewFooterComponent, NavTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'refuel-nav-angular';

  private authService = inject(AuthService);
  darkModeService : DarkModeService = inject(DarkModeService);

  ngOnInit(): void {
  this.setCurrentUser();
  }

  // It is used to persist the login
  setCurrentUser() {
    const userString = localStorage.getItem("user");
    if(!userString) return;

    const user = JSON.parse(userString);
    this.authService.currentUser.set(user);
  }

}
