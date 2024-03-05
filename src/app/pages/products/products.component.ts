import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productsList:Product[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  constructor() { }
  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data:Product[])=>{
      this.productsList = data;
    })
  }
  detailsProduct(id:number):void{
    this._router.navigate(['/products', id])
  }
}
