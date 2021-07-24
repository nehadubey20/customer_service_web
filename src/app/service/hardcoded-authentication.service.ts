import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:any,password:any)
  {
    console.log("Before logging in:"+this.isUserLoggedIn());
      if(username === 'wiley' && password === '12345')
      {
          sessionStorage.setItem('authenticateUser',username);
          console.log("Afterr logging in:"+this.isUserLoggedIn());
    
          return true;
      }
      return false;
  }

  isUserLoggedIn()
  {
    //retrieve user from session storage
    let user=sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
