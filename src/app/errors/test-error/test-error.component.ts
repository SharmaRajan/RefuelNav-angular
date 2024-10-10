import { Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test-error',
  standalone: true,
  imports: [],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.css'
})
export class TestErrorComponent {

  private http = inject(HttpClient);
  baseUrl = 'http://localhost:8709/api/v1/admin/';
  validationErrorUrl  = 'http://localhost:8709/api/auth/';

  validationErrors : string[] = [];

  get400Error(){
    this.http.get(this.baseUrl + 'users').subscribe({
      next: response => {
        console.log(response);
      },
      error: err => {
        console.log(err);
      },
      complete: () => console.log('Request has completed...!!!')
    })
  }

  get401Error(){
    this.http.get(this.baseUrl + 'users/{id}').subscribe({
      next: response => {
        console.log(response);
      },
      error: err => {
        console.log(err);
      },
      complete: () => console.log('Request has completed...!!!')
    })
  }

  get404Error(){
    this.http.get(this.baseUrl + 'users').subscribe({
      next: response => {
        console.log(response);
      },
      error: err => {
        console.log(err);
      },
      complete: () => console.log('Request has completed...!!!')
    })
  }

  get500Error(){
    this.http.get(this.baseUrl + 'users').subscribe({
      next: response => {
        console.log(response);
      },
      error: err => {
        console.log(err);
      },
      complete: () => console.log('Request has completed...!!!')
    })
  }

  get400ValidationError(){
    this.http.post(this.validationErrorUrl + 'signup',{}).subscribe({
      next: response => {
        console.log(response);
      },
      error: err => {
        console.log(err);
        this.validationErrors = err;
      },
      complete: () => console.log('Request has completed...!!!')
    })
  }

}
