import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  counter: number = 0;

  homeLikes: number = 100;

  constructor() { 
    console.log("Home comp created");
  }

  ngOnInit() {
    console.log("Home comp initialized")
  }

  ngOnDestroy() {
    console.log("Home comp destroy")
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }


}
