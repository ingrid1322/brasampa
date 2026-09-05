import { Component, input, output, ViewEncapsulation} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../product';

@Component({
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
  encapsulation: ViewEncapsulation.None
})
export class ProductCard {

  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Comprar');

  readonly addToCart = output<Product>();

  protected onAddToCart() {
    this.addToCart.emit(this.product());
  }
}
