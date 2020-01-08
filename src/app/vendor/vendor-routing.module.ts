import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorComponent } from './vendor.component';
import { LoginpopupComponent } from './loginpopup/loginpopup.component';


const routes: Routes = [
  {
    path:'',
    component:VendorComponent,
    children:[
      {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
       {
        path:'vendorLogin',
        component:LoginpopupComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
