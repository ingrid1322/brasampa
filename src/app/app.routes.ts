import { Routes } from '@angular/router';
import { ProductsGrid } from './products/products-grid/products-grid';
import { CartPage } from './cart/cart-page/cart-page';

export const routes: Routes = [
  { path: '', component: ProductsGrid },
  { path: 'carrinho', component: CartPage },
  { path: '**', redirectTo: '' }
];
