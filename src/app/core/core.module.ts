import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProjectLayoutComponent, HeaderComponent, FooterComponent, PageNotFoundComponent],
  imports: [
    RouterModule,
    HttpClientModule,
    SharedModule
  ]
})
export class CoreModule { }
