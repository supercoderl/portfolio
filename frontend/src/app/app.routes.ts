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
            },
            {
                path: "privacy",
                loadComponent: () => import('./features/privacy/privacy.component').then(m => m.PrivacyComponent)
            },
            {
                path: "term&condition",
                loadComponent: () => import('./features/term/term.component').then(m => m.TermComponent)
            }
        ]
    },
];
