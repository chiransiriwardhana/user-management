import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  // Add new user
  addUser(data: any): Observable<any> {
    return this._http.post('https://dummyjson.com/users/add', data)    
  }
  // fetch data from endpoint
  getUser(): Observable<any> {
    return this._http.get('https://dummyjson.com/users')   
  }
  // delete user
  deleteUser(id: number): Observable<any> {
    return this._http.delete(`https://dummyjson.com/users/${id}`)   
  }
  // update user details
  updateUser(id: number, data: any): Observable<any> {
    return this._http.put(`https://dummyjson.com/users/${id}`, data)
  }
}
