import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"products",component: ProductsComponent},
    {path:"products/:id",component:ProductsDetailComponent},
    {path:"categories",component:CategoriesComponent},
    {path:"categories/:name",component:CategoryDetailComponent},
];
