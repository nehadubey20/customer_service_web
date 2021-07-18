import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handelLogin() {
    //  console.log(this.username)
    if (this.username === 'wiley' && this.password === '12345') {
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;

    }

  }

}
