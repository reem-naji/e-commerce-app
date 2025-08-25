import { Routes } from '@angular/router';
import { ProductDetails } from './product-details/product-details';
import { Products } from './products/products';
import { Login } from './login/login';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {
        path:'',
        component:Products,
    },
    {
        path:'product-details/:id',
        component:ProductDetails,
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'cart',
        component:Cart
    }
];
