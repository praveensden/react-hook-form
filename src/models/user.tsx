interface Iaddress {
  city: string;
  pincode: number;
  state: string;
  country: string;
}
export interface Inputs {
  name: string;
  email: string;
  checkbox: boolean;
  age: string;
  address: Iaddress;
}
