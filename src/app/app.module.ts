import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

// logical collection of components, pipe, directives
// + services
 
@NgModule({
    // module dependencies
    imports: [
        BrowserModule
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,

        //HeaderComponent,
        //FooterComponent,
        //HomeComponent
    ],

    bootstrap: [
        AppComponent
    ]


})
export class AppModule {
 
}