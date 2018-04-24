import { Address } from './../../shared/models/address';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  today: Date;

  address: Address = new Address('BLR', 'KA', 560000);

  constructor() { }

  ngOnInit() {
    console.log("Date ", typeof this.today);
  }

  //Subscriber/handler
  onContactAddress(address: Address) {
    //ES6 template feature
    alert(`${address.city}, ${address.state}`);
  }

}
