import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakTimingsLayoutComponent } from './break-timings-layout/break-timings-layout.component';
import { BreakTimingsHomeComponent } from './pages/break-timings-home/break-timings-home.component';


const routes: Routes = [
  {
    path: '',
    component: BreakTimingsLayoutComponent,
    children: [
      {
        path: '',
        component: BreakTimingsHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakTimingsRoutingModule { }
