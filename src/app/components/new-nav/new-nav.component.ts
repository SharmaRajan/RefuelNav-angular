import {AfterViewInit, Component, ElementRef, EventEmitter, inject, Output, output, ViewChild} from '@angular/core';
import {DarkModeService} from "../../_services/dark-mode.service";
import {NgClass, TitleCasePipe} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../_services/auth.service";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {NewHomeComponent} from "../new-home/new-home.component";
import {NewLoginComponent} from "../new-login/new-login.component";
import {ToolbarService} from "../../_services/toolbar.service";

@Component({
  selector: 'app-new-nav',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    BsDropdownModule,
    TitleCasePipe,
    NewHomeComponent,
    NewLoginComponent
  ],
  templateUrl: './new-nav.component.html',
  styleUrl: './new-nav.component.scss'
})
export class NewNavComponent implements AfterViewInit {

  private router = inject(Router);
  darkModeService : DarkModeService = inject(DarkModeService);

  closeMenu = output<boolean>();

  toolbarService: ToolbarService = inject(ToolbarService);
  // @Output() sideNavToggle = new EventEmitter();

  authService = inject(AuthService);
  loginMode = false;

  // @ViewChild('sidebar') myDiv = ElementRef;

  // onSideNavToggle(e){
  //   this.sideNavToggle.emit(e);
  // }

  ngAfterViewInit() {
  //   console.log(this.myDiv);
  }

  // Openbar() {
  //   // document.querySelector('.sidebar').classList.toggle('left-[-300px]')
  //   // document.querySelector('.sidebar').classList.toggle('hidden')
  //   // document.querySelector('#submenu').classList.toggle('hidden')
  //   // this.myDiv.call();
  //   console.log("Openbar is clicked....")
  // }

  loginToggle(){
    this.loginMode = !this.loginMode;
  }

  cancelLoginMode(event : boolean) {
    this.loginMode = event;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  toggleDarkMode(){
    this.darkModeService.updateDarkMode();
  }

  closeSideNav(){
    this.toolbarService.updateSideNavMode();
  }


  login(){
    // this.router.navigateByUrl('/login');
    this.router.navigate(['/login']);
  }

  close(){
    this.closeMenu.emit(true);
  }


}
