import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SkeletonComponent } from '../../components/skeleton/skeleton.component';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, ProductCardComponent,SkeletonComponent, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  productsList = this._apiService.getAllProducts()
  constructor() { }
  
}
