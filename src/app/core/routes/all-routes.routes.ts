import { Routes } from '@angular/router';

export const ALL_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'break-timings',
        pathMatch: 'full'
    },
    {
        path: 'settings',
        loadChildren: () => import('../../settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: 'break-timings',
        loadChildren: () => import('../../break-timings/break-timings.module').then(m => m.BreakTimingsModule)
    },
    {
        path: 'break',
        loadChildren: () => import('../../break/break.module').then(m => m.BreakModule)
    },
];