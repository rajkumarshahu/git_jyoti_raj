import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserServices } from './login/user.services';
import { findSafariExecutable } from 'selenium-webdriver/safari';
import { Customerservice } from './customer/customerservice';
import { Videoservices } from './video/videoservices';
import { HttpServices } from './service/http-service';
import { HttpClientModule } from '@angular/common/http';
import { AuthguardGuard } from './authguard.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './customer/customer.component';
import { VideoComponent } from './video/video.component';
import { Filters } from './filters';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    VideoComponent,
    Filters
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
  ],
  providers: [HttpServices, UserServices, AuthguardGuard, Customerservice, Videoservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
