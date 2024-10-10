import { Component } from '@angular/core';
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-new-footer',
  standalone: true,
  imports: [
    ContactComponent
  ],
  templateUrl: './new-footer.component.html',
  styleUrl: './new-footer.component.scss'
})
export class NewFooterComponent {

}
