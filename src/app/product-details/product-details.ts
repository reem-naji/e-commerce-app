import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { StarRating } from '../star-rating/star-rating';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  standalone:true,
  imports: [CommonModule, StarRating],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  cartService = inject(CartService);
  snackBar = inject(MatSnackBar);


  productId = 0;
  product = {
    id:0,
    title:'',
    image:'',
    description:'',
    price:0,
    rating:{
      rate:0,
      count:0
    },
    category:''
  };
  product$:any;
  
  constructor(){
    this.productId = Number(this.route.snapshot.params['id']);
    this.product$ = this.productService.getProduct(this.productId);
    this.productService.getProduct(this.productId).subscribe(data => {
          this.product = data;
    });
  }
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
