import { CartService } from './cart-service';
import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../products/product';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private readonly cartItems = signal<CartItem[]>([]);

  readonly totalItems = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
);

  addToCart(Product: Product) {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === Product.id);

      if (existingItem) {
        return items.map((item: CartItem) =>
          item.product.id === Product.id ? { ...item, quantity: item.quantity + 1}
        : item
        );
      }

      return [...items, { Product, quantity: 1}];
    });
  }

}
