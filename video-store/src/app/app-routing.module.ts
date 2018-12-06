import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path: '', component: VideoComponent},
  { path: 'home', component: VideoComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: LoginComponent},
  { path: 'video', component: VideoComponent},
  { path: 'customer', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
