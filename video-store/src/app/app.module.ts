import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './login/user.data';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { UserServices } from './login/user.services';
import { findSafariExecutable } from 'selenium-webdriver/safari';
import { Customerservice } from './customer/customerservice';
import { Videoservices } from './video/videoservices';
import { HttpServices } from './service/http-service';
import { HttpClientModule }    from '@angular/common/http';

import { AuthguardGuard } from './authguard.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './customer/customer.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    CustomerComponent,
    VideoComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule
    //InMemoryWebApiModule.forRoot(UserData, {dataEncapsulation: false})
  ],
  providers: [HttpServices, UserServices, AuthguardGuard, Customerservice, Videoservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
