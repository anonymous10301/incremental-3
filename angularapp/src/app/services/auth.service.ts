import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(httpclient:HttpClient) { }
  login(username: string, password: string): Observable<{ role: string }> {
    // Replace this logic with your actual authentication mechanism
    if (username === 'admin' && password === 'password') {
      return of({ role: 'ADMIN' });
    } else if (username === 'organizer' && password === 'password') {
      return of({ role: 'ORGANIZER' });
    } else {
      // Handle invalid credentials or other scenarios
      return of({ role: 'UNKNOWN' });
    }
}
}
