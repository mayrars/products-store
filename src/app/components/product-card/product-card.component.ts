import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
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
export class ProductCardComponent implements OnInit, OnChanges{
  @Input() product!: Product;
  @Input() loader!: boolean;
  private _router = inject(Router);

  ngOnInit(): void {
    this.loader= false
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loader= false
  }
  detailsProduct(id:number):void{
    this._router.navigate(['/products', id])
  }
}
