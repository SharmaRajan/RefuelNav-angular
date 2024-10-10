import { Component } from '@angular/core';
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-new-home',
  standalone: true,
  imports: [
    ContactComponent
  ],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.scss'
})
export class NewHomeComponent {

}
