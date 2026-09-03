import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../product';

@Component({
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
})
export class ProductCard {

  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Comprar');

  readonly addToCart = output<Product>();

  protected onAddToCard() {
    this.addToCart.emit(this.product());
  }
}
