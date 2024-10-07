import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  constructor(private router: Router) {}

  selectRole(role: string): void {
    // Store role in local storage and navigate to the relevant page
    localStorage.setItem('role', role);
    
    this.router.navigate(['/login']);
    
  }
}
