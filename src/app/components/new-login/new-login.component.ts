import {Component, inject, output} from '@angular/core';
import {SignUpComponent} from "../forms/sign-up/sign-up.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-new-login',
  standalone: true,
  imports: [
    SignUpComponent,
    FormsModule
  ],
  templateUrl: './new-login.component.html',
  styleUrl: './new-login.component.scss'
})
export class NewLoginComponent {

  registerMode = false;

  authService = inject(AuthService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  model: any = {};

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

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

  cancelRegisterMode(event : boolean){
    this.registerMode = event;
  }

  cancellogin() {
    this.router.navigateByUrl('/');
  }

}
