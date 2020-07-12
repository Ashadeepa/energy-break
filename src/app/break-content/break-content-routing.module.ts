import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakContentLayoutComponent } from './break-content-layout/break-content-layout.component';
import { BreakContentHomeComponent } from './pages/break-content-home/break-content-home.component';


const routes: Routes = [
  {
    path: '',
    component: BreakContentLayoutComponent,
    children: [
      {
        path: ':category/:minutes',
        component: BreakContentHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakContentRoutingModule { }
