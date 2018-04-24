import { Component, OnInit } from '@angular/core';

interface Address {
  city: string;
  state: string;

  // ? => optional 
  pincode?: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // address is undefined
  address: Address;
  
  // address: Address = {
  //   city: 'Bangalore',
  //   state: 'Karnataka'
  // }

  
  name: string = "Angular";


  constructor() { }

  ngOnInit() {
       
      setTimeout( () => {
          console.log("Timeout ");
          this.address = {city: 'Bangalore', 
                          state: 'Karnataka', 
                          pincode: 560000}
      }, 3000);
  }

}
