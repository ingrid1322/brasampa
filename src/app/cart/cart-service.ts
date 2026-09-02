import { Injectable, Service, signal } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly cartItems = signal<Product[]>([]);

  addToCart(product: Product) {
    console.log('Adicionar um Produto: ', product.name);
    this.cartItems.update((items) => [...items, product]);
  }
}
