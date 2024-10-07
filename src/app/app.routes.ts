import { Routes } from '@angular/router';
import { LoginComponent } from './Components/BloodBankAdmin/login/login.component';
import { DonorsDataComponent } from './Components/BloodBankAdmin/donors-data/donors-data.component';
import { BloodInventoryComponent } from './Components/BloodBankAdmin/blood-inventory/blood-inventory.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { DonorProfileComponent } from './Components/BloodBankAdmin/donor-profile/donor-profile.component';
import { RegisterComponent } from './Components/register/register.component';

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
  { path: '**', component: PageNotFoundComponent }


];
