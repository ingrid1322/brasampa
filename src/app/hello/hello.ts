import  Value  from './../../../node_modules/decimal.js/decimal.d';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.scss',
  templateUrl: './hello.html',
})
export class Hello {
  protected title = 'Brasampa!'
  protected isDisabled = false;

  protected onClick() {
    console.log('button clicked');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  private readonly countLog = effect(() => {
    console.log(' Count changed', this.count())
  });

   protected increateCounter() {
    this.count.update(Value => Value + 1);
  }

  protected decreaseCounter() {
    this.count.update(Value => Value - 1);
  }

  protected resetCounter() {
    this.count.set(0)
  }
}
