import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './products/products';
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Products, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
