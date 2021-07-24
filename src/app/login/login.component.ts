import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'wiley'
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  // router is injected automatically by ng framework(dependency injection)
  // hardcodedAuthentation service is injected automatically by ng framework(dependency injection)
  constructor(private router: Router, public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handelLogin() {
    //  console.log(this.username)
    if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;

    }

  }

}
