import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VendorComponent } from './vendor.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { LoginpopupComponent } from './loginpopup/loginpopup.component';


@NgModule({
  declarations: [VendorComponent,LoginComponent, DashboardComponent, LoginpopupComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LoginpopupComponent
  ],
})
export class VendorModule { }
