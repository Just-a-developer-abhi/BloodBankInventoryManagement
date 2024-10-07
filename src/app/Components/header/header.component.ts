import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../Models/models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: User = sessionStorage.getItem('loggedInUser') ? JSON.parse(sessionStorage.getItem('loggedInUser') as string) : null;

  constructor(private router: Router) {}
  
  
  ngOnInit(): void {
   if(!sessionStorage.getItem('loggedInUser')){
    this.router.navigate(['/login']);
   }
  }

  toggleProfile() { 
    this.isLoggedIn = !this.isLoggedIn;
  }
  logout() {
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  navigateTo(tab: string) {
    this.router.navigate([tab]);
    console.log(`Navigating to ${tab}`);
  }
  
}
