import { clearScreen } from './../../../../node_modules/ansi-escapes/base.d';
import { Component, computed, inject, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIcon } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  imports: [ProductCard, MatIcon, MatInputModule, FormsModule, MatFormFieldModule],
  selector: 'app-products-grid',
  styleUrl: './products-grid.scss',
  templateUrl: './products-grid.html',

})
export class ProductsGrid {

  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Fones de ouvido sem fio premium',
      description: 'Descrição do produto',
      price: 199.99,
      originalPrice: 249.99,
      url: '#'
    },
    {
      id: 2,
      name: 'Relógio inteligente fitness',
      description: 'Descrição do produto',
      price: 299.99,
      originalPrice: 359.99,
      url: '#'
    },
    {
      id: 3,
      name: 'Caixa de som Bluetooth',
      description: 'Descrição do produto',
      price: 79.99,
      originalPrice: 90.99,
      url: '#'
    },
  ]);



  onAddToCart(product: Product) {
   if (product.url && product.url !== '#') {
    window.open(product.url, '_blank');
   } else {
    console.log('Este produto ainda não tem um link válido configurado.');
   }
  }

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLocaleLowerCase().trim();
    if (!term) return this.products();


    return this.products().filter((product) =>
      product.name.toLocaleLowerCase().includes(term)
    );
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }
}
