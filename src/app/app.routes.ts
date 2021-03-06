import { Routes } from '@angular/router';

import { CategoriesComponent,
         CategoryDetailComponent,
         PetsComponent,
         PetDetailComponent,
         PetFormComponent,
         CategoryFormComponent 
        } from './components';

export const BERTONI_ROUTES: Routes = [
    {
        path: '', 
        component: PetsComponent,
    },
    {
        path: 'categories', 
        component: CategoriesComponent,
    },
    {
        path: 'pets', 
        component: PetsComponent,
    }
];

export const BERTONI_COMPONENTS: any[] = [
    CategoriesComponent,
    CategoryDetailComponent,
    PetsComponent,
    PetDetailComponent,
    PetFormComponent,
    CategoryFormComponent 
];
