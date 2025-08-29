import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient){}

  getProducts(){
    return this.http.get<any[]>(this.url);
  }

  getProduct(id:number){
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
