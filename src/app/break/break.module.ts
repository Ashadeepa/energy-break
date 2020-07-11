import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakRoutingModule } from './break-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BreakLayoutComponent } from './break-layout/break-layout.component';
import { BreakHomeComponent } from './pages/break-home/break-home.component';


@NgModule({
  declarations: [BreakLayoutComponent, BreakHomeComponent],
  imports: [
    SharedModule,
    BreakRoutingModule
  ]
})
export class BreakModule { }
