import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { SettingsHomeComponent } from './pages/settings-home/settings-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SettingsLayoutComponent, SettingsHomeComponent],
  imports: [
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
