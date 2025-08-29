import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarRating } from '../star-rating/star-rating';
import { LimitStringPipe } from '../limit-string-pipe';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [RouterModule, CommonModule, StarRating, LimitStringPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productService = inject(ProductService);

  products = this.productService.getProducts();
}
