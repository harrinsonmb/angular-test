import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {PageComponent} from "../../shared/page/page.component";
import {LocationManagerService} from "../../../services/location-manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends PageComponent implements OnInit {
  @Input() userName: string;
  @Input() password: string;
  loginError: boolean;
  pageTitle: string = "Login page";
  private rt:Router;

  constructor(router: Router, LocationManagerService: LocationManagerService) {
    super(router, LocationManagerService);
    this.userName = '';
    this.password = '';
    this.loginError = false;
    this.rt = router;
  }

  setLogin(form:NgForm) {
    let inputs = form.value;
    if (inputs.userName.toLowerCase() === 'user' && inputs.password === 'pass') {
      localStorage.setItem('token', 'thisIsAFakeAccessToken');
      this.rt.navigate(['']).then();
    } else {
      this.loginError = true;
      return false;
    }
  }
}
