import { Address } from './../../models/address';
import { Component, OnInit,
   Input,

   Output,
   EventEmitter
  
  } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  // property binding

  @Input()
  address: Address;

// custom event (contactEvent)
// event binding
@Output()
contactEvent: EventEmitter<Address> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  contact() {
    // todo: call parent method
    // publish an event, pass address as event argument
    this.contactEvent.emit(this.address);
  }

}
