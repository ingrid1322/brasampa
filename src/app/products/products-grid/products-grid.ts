import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { signal } from '@angular/core';
import { Product } from '../product';
import { MatIcon } from "@angular/material/icon";

@Component({
  imports: [ProductCard, MatIcon],
  selector: 'app-products-grid',
  styleUrl: './products-grid.scss',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Fones de ouvido sem fio premium',
      description: 'Descrição do produto',
      price: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Relógio inteligente fitness',
      description: 'Descrição do produto',
      price: 299.99,
      originalPrice: 359.99

    },
    {
      id: 3,
      name: 'Caixa de som Bluetooth',
      description: 'Descrição do produto',
      price: 79.99,
      originalPrice: 90.99
    }
  ]);
}
