import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'vendor',
    pathMatch:'full'
  },
  {
    path:'vendor',
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule)
  },
  { path: '**', redirectTo: 'vendor' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
