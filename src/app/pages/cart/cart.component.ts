import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Cart, ProductData } from '../../models/carts.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartData: Cart = {} as Cart;
  cartService: any;
  products: any[] = [];
  total: any = 0.0;
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getCart(4).subscribe((data) => {
      data[0].products.map((prod:ProductData, index:number)=>{
        this.apiService.getProductById(prod.productId).subscribe((product) => {
          let newproduct = {...product, quantity: data[0].products[index].quantity}
          this.products.push(newproduct);
          this.total += newproduct.price * newproduct.quantity;
        })
      })
      this.cartData = data[0];
    })
  }
  checkout(){}
}
