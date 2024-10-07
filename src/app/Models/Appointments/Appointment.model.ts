import { Donor } from "../Donor/donor.model";

export interface Appointment {
    id?: number;
    donor: Donor;
    date?: string;
    time?: string;
    location?: string;
    accepted?: boolean;
    completed?: boolean;
}