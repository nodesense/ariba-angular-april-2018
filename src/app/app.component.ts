import {Component, OnInit} from "@angular/core";

@Component({
    // meta data
    // html tag <app-root></app-root>
    selector: 'app-root',
    // view
    templateUrl: 'app.component.html',

    styleUrls: [
        'app.component.css'
    ]

})
export class AppComponent implements OnInit {
    title: string = "Product App"

    // called before loading view
    constructor() {
        console.log("App Component created");
    }

    // called after the view loading
    // ajax call, subscribe
    ngOnInit() {
        console.log("App view loaded")
    }
}