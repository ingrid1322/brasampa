
import { Component, ViewEncapsulation } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  encapsulation: ViewEncapsulation.None
})

export class Header {

}
