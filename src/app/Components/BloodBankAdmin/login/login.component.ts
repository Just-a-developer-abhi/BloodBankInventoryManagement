import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../Services/user/user.service';
import { error } from 'console';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  selectedRoleImage: string = '';
  credentials = {
    username: '',
    password: ''
  };

  role: string = localStorage.getItem('role') || 'Donor';
  errorMessage: string = '';
  constructor(private userService: UserService,private router: Router) {}
  
  ngOnInit(): void {
    if(localStorage.getItem('loggedInUser')){
    localStorage.removeItem('loggedInUser');
    }
  }

  //Method to navigate the user to the respective register page
  async Signup(){
    console.log("Signup");
    await this.router.navigate(['/register']);
  }

  onSubmit() {
    // Retrieve users from local storage
    this.userService.login(this.credentials.username,this.credentials.password,this.role).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('loggedInUser', JSON.stringify(data));
        // Redirect based on the role (this is optional, you can modify it as per your app flow)
      if (this.role === 'Staff') {
        this.router.navigate(['/bb-staff/home']); // Example route for BB Staff
      } else if (this.role === 'Donor') {
        this.router.navigate(['/donor-dashboard']);
      } else if (this.role === 'Hospitals') {
        this.router.navigate(['/hospital/home']);
      }
      },
      error => {
        console.log(error);
        this.errorMessage = 'Invalid username or password';
      }
    );

  }
  }
