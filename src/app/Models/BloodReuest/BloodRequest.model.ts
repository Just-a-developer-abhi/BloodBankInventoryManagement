export interface BloodGroupRequest {
    bloodGroup: string;
    quantity: number;
  }
  
  export interface Request {
    hospitalName: string;
    totalQuantity: number;
    bloodGroups: BloodGroupRequest[];
  }