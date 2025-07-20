import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            { 
                path: "", 
                loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) 
            }
        ]
    },
];
