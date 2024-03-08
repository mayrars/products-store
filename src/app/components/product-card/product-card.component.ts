import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{
  @Input()
  product!: Product;

  private _router = inject(Router);
  
  ngOnInit(): void {
      
  }
  detailsProduct(id:number):void{
    this._router.navigate(['/products', id])
  }
}
