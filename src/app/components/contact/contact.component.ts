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

  address: Address = {
    city: 'Bangalore',
    state: 'Karnataka'
  }

  constructor() { }

  ngOnInit() {
  }

}
