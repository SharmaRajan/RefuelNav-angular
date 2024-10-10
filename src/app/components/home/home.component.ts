import {Component, inject, OnInit} from '@angular/core';
import {RegisterComponent} from "../register/register.component";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {AuthService} from "../../_services/auth.service";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RegisterComponent,
    NgForOf,
    LoginComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  registerMode = false;
  private authService = inject(AuthService);

  ngOnInit(): void {
    // this.getAllUsers();
  }

  usersLoggedIn(){
    // this.authService.login()
  }



}
