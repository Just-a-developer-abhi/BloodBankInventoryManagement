import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { User } from '../../Models/models/user.model';
import { Donor } from '../../Models/Donor/donor.model';
import { Hospital } from '../../Models/Hospitals/hospital.model';
import { Request } from '../../Models/BloodReuest/BloodRequest.model';

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

    //Fetch All Donors
    getDonors(): Observable<Donor[]> {
      return this.http.get<Donor[]>(`${this.apiUrl}/Donors`).pipe( 
        catchError((error) => {
          console.log(error);
          return throwError('Error fetching donor data');
          })
          );
    }

    // Fetching all hospitals
    getHospitals(): Observable<Hospital[]> {
      return this.http.get<Hospital[]>(`${this.apiUrl}/Hospitals`); // Adjust URL as per your JSON structure
    }


  getBloodRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.apiUrl}/Requests`).pipe(
      catchError((error) => {
        console.log(error);
        return throwError('Error fetching blood requests');
        })
      );
  }

  //Fetch All Apointments
  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Appointments`).pipe(
      catchError((error) => {
        console.log(error);
        return throwError('Error fetching appointments');
        })
      );
  }

  // Delete the appointment from Appointments collection
  deleteAppointment(appointmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Appointments/${appointmentId}`);
  }

  //Fetching Donor Details using Username
  getDonorDetails(username: string): Observable<Donor> {
    return this.http.get<Donor>(`${this.apiUrl}/Donors/${username}`).pipe(
      catchError((error) => {
        console.log(error);
        return throwError('Error fetching donor data');
        })
    );
    }

   // Add donor to Donors collection
   addDonor(donor: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Donors`, donor);
  }

    // Method to schedule an appointment
    scheduleAppointment(appointment: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/Appointments`, appointment);
    }
  
  checkAndAddBloodSample(bloodType: string): Observable<any> {
    console.log("This is the bloodtype: "+bloodType);
    return this.http.get<any[]>(`${this.apiUrl}/storage?type=${bloodType}`).pipe(
      switchMap((samples) => {
        if (samples.length > 0) {
          // If it exists, increment the quantity
          const existingSample = samples[0];
          const updatedSample = { ...existingSample, quantity: existingSample.quantity + 1 };
          return this.http.put<any>(`${this.apiUrl}/Storage/${existingSample.id}`, updatedSample);
        } else {
          // If it does not exist, create a new entry with quantity 1
          const newSample = { type: bloodType, quantity: 1 };
          return this.http.post<any>(`${this.apiUrl}/Storage`, newSample);
        }
      })
    );
  }

}
