import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../Models/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Register a new user (donor, staff, or hospital)
  registerUser(user: User): Observable<any> {
    console.log(user + " user");
    return this.http.post(`${this.apiUrl}/${user.role}s`, user).pipe(
      catchError((error) => {
        console.log(error);
        return throwError('Error registering user');
        })
    );
  }

  // Login for any user based on username and password
  login(username: string, password: string, role: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${role}s?username=${username}&password=${password}`).pipe(
      catchError((error) => { 
        console.log(error);
        return throwError('Invalid username or password');
      })
    );
  }

    // Fetch inventory items
    getInventoryItems(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/storage`).pipe(
        catchError((error) => {
          console.log(error);
          return throwError('Error fetching inventory items');
          })
        );
    }
}
