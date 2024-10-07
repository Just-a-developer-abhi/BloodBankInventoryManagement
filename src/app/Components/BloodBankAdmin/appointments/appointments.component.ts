import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { UserService } from '../../../Services/user/user.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Appointment } from '../../../Models/Appointments/Appointment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [HeaderComponent, CommonModule, HttpClientModule, FormsModule],
  providers: [UserService],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];
  invalidAction : boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  acceptAppointment(appointment: Appointment): void {
  }
  rejectAppointment(appointment: Appointment): void { 
    console.log(appointment);
  }
 
  completeAppointment(appointment: any): void {
    console.log(appointment);
    this.userService.addDonor(appointment.donor).subscribe(() => { 
      this.userService.checkAndAddBloodSample(appointment.donor.bloodGroup).subscribe(() => {
      this.userService.deleteAppointment(appointment.id).subscribe(() => {
       this.appointments = this.appointments.filter(a => a.id !== appointment.id);
        });
      });
    });

    console.log("This was the appointment", appointment);
  }

  isFutureDate(date: string): boolean {
    const today = new Date();
    const appointmentDate = new Date(date);
    console.log(appointmentDate > today);
    this.invalidAction = true;
    return appointmentDate > today;
  }


}
