import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserFromServer(name: string, password: string): Observable<any> {
    return this.http.get('https://localhost:44337/api/User/getUser', {
      params: {
        name: name,
        password: password
      }
    })
  }

  passwordValidator(password: string): string {
    let error: string = ''
    if (password.length < 8) {
      error += "password must have at least 8 characters\n"
    }
    if (password.indexOf(' ') !== -1) {
      error += "password cannot contain spaces"
    }
    return error
  }
}



