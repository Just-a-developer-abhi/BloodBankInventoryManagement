import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../Services/user/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Donor } from '../../../Models/Donor/donor.model';

@Component({
  selector: 'app-donors-data',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule, CommonModule],
  providers: [UserService],
  templateUrl: './donors-data.component.html',
  styleUrl: './donors-data.component.scss'
})
export class DonorsDataComponent implements OnInit {
  donors: Donor[] = [];

  constructor(private userService: UserService) {} // Inject UserService

  ngOnInit(): void {
    this.fetchDonors();
  }

  addNewDonor() {
    // Logic to add a new donor
    console.log('Adding a new donor...');
  }

  fetchDonors(): void {
    this.userService.getDonors().subscribe(donors => {
      this.donors = donors; // Populate the donors from the service
    });
  }
}