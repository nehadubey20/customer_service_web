import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn1:boolean=false
  constructor(public hardCodedAuthenticatinService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.isUserLoggedIn1 = this.hardCodedAuthenticatinService.isUserLoggedIn();
  }

}
