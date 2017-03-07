import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {Http, Headers} from '@angular/http';
// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
 
lock = new Auth0Lock('6kN9HXmMKMQPM0fHUR0GiKt4iSYcX3it', 'maltobasi.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => {
      this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
          if(error){
              throw new Error(error);
          }
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('profile', JSON.stringify(profile)); 
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();

  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 
//    console.log(localStorage.profile)
    'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  };
}