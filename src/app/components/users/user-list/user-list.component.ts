import {Component, inject, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  users: any;

  // we are not using constructor injection here
  http = inject(HttpClient);
  baseUrl = 'http://localhost:8709/api/v1/admin/';

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get(this.baseUrl + 'users').subscribe({
      next: response => this.users = response,
      error: err => console.log(err),
      // complete: data => {console.log(data)},
      complete: () => console.log('Request has completed...!!!')
    })
  }
}
