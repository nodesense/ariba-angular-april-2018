import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  members: string[] = ["Krish", "Venkat"];

  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addMember(name: string): void {
    this.members.push(name);
  }

  empty() {
    this.members = [];
  }

}
