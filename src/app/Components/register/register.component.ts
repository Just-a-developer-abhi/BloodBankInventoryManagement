import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Models/models/user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../../Services/user/user.service';
// import { UserService } from '../../Services/user/user.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent{
  selectedRole: string = localStorage.getItem('role') || 'Staff';
  registerData: User = new User();
  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  errorMessage: string = '';

  constructor(private userService: UserService,private router: Router) {}

  onRegister(form: any) {
    if (!form.valid) {
      // Show an error message if the form is invalid
      this.errorMessage = 'Please fill out all required fields.';
      return;
    }

    // Clear any previous error messages
    this.errorMessage = '';
    this.registerData.role = this.selectedRole;

    // Store role-specific data in localStorage
    

    // Redirect to the login page after successful registration
    this.userService.registerUser(this.registerData).subscribe(
      () => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ ...this.registerData, role: this.selectedRole });
        localStorage.setItem('users', JSON.stringify(users));
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );

  }
 }
