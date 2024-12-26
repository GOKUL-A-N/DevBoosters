import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number) {
    return this.http.get(`http://localhost:3000/user/${id}`);
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/user/register`, data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/user/login`, data);
  }

  addSkill(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/user/addSkill`, data);
  }
  removeSkill(data: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/user/removeSkills`, data);
  }

  addAbout(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/user/about`, data);
  }
}
