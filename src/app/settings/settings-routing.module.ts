import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { SettingsHomeComponent } from './pages/settings-home/settings-home.component';


const routes: Routes = [
  {
    path: '',
    component: SettingsLayoutComponent,
    children: [
      {
        path: '',
        component: SettingsHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
