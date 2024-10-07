export class User {
    id?: number;
    fullName?: string ='';
    username: string = '';
    password: string = '';
    role: string = '';   // 'donor', 'staff', or 'hospital'
    
    // Donor-specific fields
    bloodGroup?: string;
    confirmedBloodGroup?: string;
    age?: number;
    phone?: string;
    email?: string;
    
    // Staff-specific fields
    staffId?: string;
    position?: string;
    
    // Hospital-specific fields
    hospitalName?: string;
    hospitalLicense?: string;
  }
  
