import { Routes } from '@angular/router';
import { LoginComponent } from './Components/BloodBankAdmin/login/login.component';
import { DonorsDataComponent } from './Components/BloodBankAdmin/donors-data/donors-data.component';
import { BloodInventoryComponent } from './Components/BloodBankAdmin/blood-inventory/blood-inventory.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { DonorProfileComponent } from './Components/Donor/donor-profile/donor-profile.component';
import { RegisterComponent } from './Components/register/register.component';
import { RequestBloodComponent } from './Components/Hospitals/request-blood/request-blood.component';
import { BloodRequestComponent } from './Components/BloodBankAdmin/blood-request/blood-request.component';
import { AppointmentsComponent } from './Components/BloodBankAdmin/appointments/appointments.component';
import { HospitalDataComponent } from './Components/BloodBankAdmin/hospital-data/hospital-data.component';

export const routes: Routes = [

  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'bb-staff/home', redirectTo: '/blood-inventory', pathMatch: 'full' },
  { path: 'hospital/home', redirectTo: '/blood-inventory', pathMatch: 'full' },
  { path: 'landing-page', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'donors', component: DonorsDataComponent },
  { path: 'blood-inventory', component: BloodInventoryComponent},
  {path: 'donor-dashboard', component: DonorProfileComponent},
  {path: 'home', redirectTo: '/blood-inventory', pathMatch: 'full'},
  {path: 'donor', redirectTo: '/donors', pathMatch: 'full'},
  {path: 'hospitals', component: HospitalDataComponent},
  {path: 'requests', component: BloodRequestComponent},
  {path: 'appointments', component: AppointmentsComponent},
  { path: '**', component: PageNotFoundComponent },

];
