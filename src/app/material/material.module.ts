import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatButtonModule,
    Material.MatSliderModule,
    Material.MatTableModule,
    Material.MatDialogModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatCheckboxModule,
    Material.MatIconModule,
    Material.MatToolbarModule,
    Material.MatSidenavModule,
    Material.MatListModule
  ],  
  exports: [
    Material.MatButtonModule,
    Material.MatSliderModule,
    Material.MatTableModule,
    Material.MatDialogModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatCheckboxModule,
    Material.MatIconModule,
    Material.MatToolbarModule,
    Material.MatSidenavModule,
    Material.MatListModule
  ]
})
export class MaterialModule { }