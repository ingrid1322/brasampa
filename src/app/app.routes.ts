import { Routes } from '@angular/router';
import { ProductsGrid } from './products/products-grid/products-grid';


export const routes: Routes = [
  { path: '', component: ProductsGrid },
  { path: '**', redirectTo: '' }
];
