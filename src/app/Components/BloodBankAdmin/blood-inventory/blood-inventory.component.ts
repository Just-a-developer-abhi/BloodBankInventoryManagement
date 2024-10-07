import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../header/header.component';


@Component({
  selector: 'app-blood-inventory',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HeaderComponent],
  providers: [UserService],
  templateUrl: './blood-inventory.component.html',
  styleUrl: './blood-inventory.component.scss'
})
export class BloodInventoryComponent implements OnInit {
  
  ngOnInit(): void {
    this.fetchInventoryItems();
  }

  inventoryItems: any[] = [];
  totalQuantity: number = 0;   

  constructor(private userService: UserService, private router: Router) {}

  fetchInventoryItems(): void {
    this.userService.getInventoryItems().subscribe(
      (items) => {
        this.inventoryItems = items; // Store fetched items
        this.calculateTotalQuantity(); // Calculate total quantity
      },
      (error) => {
        console.error('Error fetching inventory items:', error);
      }
    );
    console.log(JSON.stringify(this.inventoryItems));
  }

  calculateTotalQuantity(): void {
    this.totalQuantity = this.inventoryItems.reduce((acc, item) => {
      return acc + Number(item.quantity); // Summing up the quantities
    }, 0);
  }

  navigateTo(tab: string) {
    this.router.navigate([tab]);
    console.log(`Navigating to ${tab}`);
  }

  addNewDonor() {
    // Logic to add a new donor
    console.log('Adding a new donor...');
  }
}
