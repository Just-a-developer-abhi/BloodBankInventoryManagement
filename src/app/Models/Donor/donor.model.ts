export class Donor {
    id?: number;
    fullName?: string ='';
    username: string = '';
    password: string = '';
    bloodGroup?: string;
    age?: number;
    profilePicture?: string;
    address?: string;
    email?: string;
    phone?: string;
    // pastDonations?: Donation[];
    medicalHistory?: string;
}