import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { Hospital } from '../../../Models/Hospitals/hospital.model';
import { UserService } from '../../../Services/user/user.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hospital-data',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule, CommonModule],
  providers: [UserService, HeaderComponent],
  templateUrl: './hospital-data.component.html',
  styleUrl: './hospital-data.component.scss'
})
export class HospitalDataComponent implements OnInit {
  hospitals: Hospital[] = [];

  constructor(private userService: UserService) {} // Inject UserService

  ngOnInit(): void {
    this.fetchHospitals();
  }

  fetchHospitals(): void {
    this.userService.getHospitals().subscribe(hospitals => {
      this.hospitals = hospitals; // Populate the hospitals from the service
    });
  }

}
