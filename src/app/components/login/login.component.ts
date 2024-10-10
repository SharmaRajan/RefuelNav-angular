import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {RegisterComponent} from "../register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RegisterComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  registerMode = false;

  authService = inject(AuthService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  model: any = {};

  login() {
    // console.log(this.model);
    this.authService.login(this.model).subscribe({
      next: (response) => {
        // console.log(response);
        void this.router.navigateByUrl('/users');
        this.model = response;
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error.message);
      },
      complete: () => {
        console.log('Request has completed...!!!');
      }
    })
  }



  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event : boolean){
    this.registerMode = event;
  }

}
