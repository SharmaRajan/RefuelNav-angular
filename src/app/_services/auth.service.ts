import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../_models/User";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  currentUser = signal<User | null>(null);
  baseUrl = 'http://localhost:8709/api/auth/';

  // constructor() { }

  login(model: any) {
    return  this.http.post<User>(this.baseUrl + 'signin',model).pipe(
      map(user =>{
        if(user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    )
  }

  register(model: any) {
    return  this.http.post<User>(this.baseUrl + 'signup',model).pipe(
      map(user =>{
        if(user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    )
  }

 logout(){
    localStorage.removeItem("user");
    this.currentUser.set(null);
 }
}
