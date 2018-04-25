import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';

// logical collection of components, pipe, directives
// + services

import {FormsModule} from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Step 1: map path to component
import {RouterModule, Routes} from '@angular/router';

// ng 4.3 onwards
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent
    },
    {
        path: 'about', //http://localhost:4200/about
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'contact-us',
        redirectTo: 'contact'
    }, 
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    // module dependencies
    imports: [
        BrowserModule,
        FormsModule,

        // Apply routes to angular
        RouterModule.forRoot(routes),

        HttpClientModule,

        SharedModule,

        //TODO: Lazy Load
        ProductModule,

        AuthModule
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent,

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