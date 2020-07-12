import { NgModule } from '@angular/core';

import { BreakContentRoutingModule } from './break-content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BreakContentLayoutComponent } from './break-content-layout/break-content-layout.component';
import { BreakContentHomeComponent } from './pages/break-content-home/break-content-home.component';
import { BreakCompletionComponent } from './pages/break-completion/break-completion.component';


@NgModule({
  declarations: [BreakContentLayoutComponent, BreakContentHomeComponent, BreakCompletionComponent],
  imports: [
    SharedModule,
    BreakContentRoutingModule
  ]
})
export class BreakContentModule { }
