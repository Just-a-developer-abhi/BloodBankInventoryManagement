import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../Services/user/user.service';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Donor } from '../../../Models/Donor/donor.model';
import { User } from '../../../Models/models/user.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-donor-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  providers: [UserService],
  templateUrl: './donor-profile.component.html',
  styleUrl: './donor-profile.component.scss'
})
export class DonorProfileComponent implements OnInit {
  appointmentForm: FormGroup;
  donorDetails: Donor | null  = null;
  isLoggedIn = false;
  user : User | null = JSON.parse(localStorage.getItem('loggedInUser')?.toString() || 'null');

  constructor(private fb: FormBuilder, private userService: UserService, private router : Router) {

    // Appointment Form
    this.appointmentForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.fetchDonorDetails();
  }

  fetchDonorDetails(): void {
    if(this.user){
      this.userService.getDonorDetails(this.user?.username).subscribe(donor => {
        this.donorDetails = donor;
        console.log(this.donorDetails);
      });
    }{
      this.donorDetails = {
        fullName: "Abhishek Singh Rajawat",
        bloodGroup: "O+",
        age: 25,
        phone: "1234567890",
        address: "AECS Layout",
        medicalHistory: "No illness",
        username: "abhisheksinghrajawat",
        password: "123456789",
      }
    }
  }

  logout(){
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
  
  // Schedule an appointment
  onScheduleAppointment(): void {
    if (this.appointmentForm.valid && this.donorDetails) {
      const appointment = {
        donorId: this.donorDetails.id, 
        donor: {...this.donorDetails},
        ...this.appointmentForm.value
      };
      console.log(appointment);
      this.userService.scheduleAppointment(appointment).subscribe(() => {
        alert('Appointment scheduled successfully!');
        this.appointmentForm.reset();
      });
    }
  }
}
