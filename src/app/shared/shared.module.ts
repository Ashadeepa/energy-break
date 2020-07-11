import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
