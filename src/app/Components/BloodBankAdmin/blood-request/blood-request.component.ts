import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { UserService } from '../../../Services/user/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Request } from '../../../Models/BloodReuest/BloodRequest.model';

@Component({
  selector: 'app-blood-request',
  standalone: true,
  imports: [HeaderComponent, CommonModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './blood-request.component.html',
  styleUrl: './blood-request.component.scss'
})
export class BloodRequestComponent implements OnInit {
  requests: Request[] = [];
  selectedRequest: Request | null = null;
  constructor(private userService: UserService) {} 

  ngOnInit(): void {
    this.selectedRequest = this.requests.length > 0 ? this.requests[0] : null;
    this.fetchRequests();
    console.log("Giving best ",JSON.stringify(this.requests));
  }

  fetchRequests(): void {
    this.userService.getBloodRequests().subscribe(requests => {
      this.requests = requests; 
    });
    
  }

  viewDetails(request: Request): void {
    if(request){
      this.selectedRequest = request; 
    }
  }

  acceptRequest(request: Request): void {
  }
  rejectRequest(request: Request): void {

  }

}
