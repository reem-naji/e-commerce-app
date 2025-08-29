import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarRating } from '../star-rating/star-rating';
import { LimitStringPipe } from '../limit-string-pipe';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [RouterModule, CommonModule, StarRating, LimitStringPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productService = inject(ProductService);
  cartService = inject(CartService);
  snackBar = inject(MatSnackBar);

  products = this.productService.getProducts();

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('✅ Added to cart:', product);

    this.snackBar.open(`${product.title} added to cart!`, 'Close', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']

    });
  }
}
