import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  addUser(data: any): Observable<any> {
    return this._http.post('https://dummyjson.com/users/add', data)    
  }

  getUser(): Observable<any> {
    return this._http.get('https://dummyjson.com/users')   
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`https://dummyjson.com/users/${id}`)   
  }

  updateUser(id: number, data: any): Observable<any> {
    return this._http.put(`https://dummyjson.com/users/${id}`, data)
  }
}
