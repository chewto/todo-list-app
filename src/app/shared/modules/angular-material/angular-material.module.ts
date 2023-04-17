import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [
  MatIconModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    materialModules
  ]
})
export class AngularMaterialModule { }
