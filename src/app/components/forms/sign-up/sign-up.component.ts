import {Component, EventEmitter, inject, Output, output} from '@angular/core';
import {AuthService} from "../../../_services/auth.service";
import {ToastrService} from "ngx-toastr";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  cancelRegister = output<boolean>();

  model : any = {};
  private authService = inject(AuthService);
  private toastr = inject(ToastrService);

  countries = [
    'India','Brazil','USA', 'Canada', 'Mexico', 'China', 'Japan'
  ];

  register(){
    this.authService.register(this.model).subscribe({
      next: response => {
        console.log(response)
        this.cancel();
      },
      error: err => {
        console.log(err)
        this.toastr.error(err.error.message);
        // this.toastr.error(err.error);
      },
      complete: () => console.log('Request has completed...!!!')
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
