import {Component, EventEmitter, inject, input, Input, output, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";
import {ToastrService} from "ngx-toastr";
// import {confirmPasswordValidator} from "";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // 1st approach before angular 17.3
  // Sending data from Parent to Child
  // @Input() usersFromHomeComponent : any;
  // Sending data from Child to Parent
  // @Output() cancelRegister = new EventEmitter();

  // 2nd approach: (Signal) This approach is available after angular 17.3 onwards
  // Sending data from Parent to Child
  // usersFromHomeComponent = input.required<any>();
  // Sending data from Child to Parent
  cancelRegister = output<boolean>();

  model : any = {};
  private authService = inject(AuthService);
  private toastr = inject(ToastrService);

//   passwordForm: FormGroup = new FormGroup({
//     password1: new FormControl<string>('', [Validators.required]),
//     password2: new FormControl<string>('', [Validators.required]),
//     validators: confirmPasswordValidator
// });

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
