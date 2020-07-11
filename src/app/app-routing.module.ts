import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ProjectLayoutComponent } from './core/layouts/project-layout/project-layout.component';
import { ALL_ROUTES } from './core/routes/all-routes.routes';


const routes: Routes = [
  {
    path: '',
    component: ProjectLayoutComponent,
    children: ALL_ROUTES
  },
  {
    path: 'RefreshComponent',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
