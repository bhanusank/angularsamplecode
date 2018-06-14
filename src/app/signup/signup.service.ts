import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Signup } from './signup';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()

export class SignupService {

  private userUrl = 'http://localhost:9090/api/auth/signup';
  

  constructor(private http: HttpClient) {
  }

  public createUser(user) {
    return this.http.post<Signup>(this.userUrl, user,httpOptions);
  }
 


}
