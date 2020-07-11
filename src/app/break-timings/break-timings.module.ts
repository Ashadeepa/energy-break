import { NgModule } from '@angular/core';
import { BreakTimingsRoutingModule } from './break-timings-routing.module';
import { BreakTimingsLayoutComponent } from './break-timings-layout/break-timings-layout.component';
import { BreakTimingsHomeComponent } from './pages/break-timings-home/break-timings-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BreakTimingsLayoutComponent, BreakTimingsHomeComponent],
  imports: [
    SharedModule,
    BreakTimingsRoutingModule
  ]
})
export class BreakTimingsModule { }
