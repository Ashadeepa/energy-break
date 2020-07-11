import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakLayoutComponent } from './break-layout/break-layout.component';
import { BreakHomeComponent } from './pages/break-home/break-home.component';


const routes: Routes = [
  {
    path: '',
    component: BreakLayoutComponent,
    children: [
      {
        path: '',
        component: BreakHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakRoutingModule { }
