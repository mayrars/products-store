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
export class ProductsComponent implements OnInit{
  private _router = inject(Router);
  productsList: Product[] = [];
  selectedValue = 'asc'
  constructor(private _apiService: ApiService) { }
  ngOnInit(): void {(
    this._apiService.getAllProducts(undefined,this.selectedValue).subscribe((data:Product[])=>{
      this.productsList = data
    }))
  }
  onSelect(action:string){
    this.selectedValue = action;
    this._apiService.getAllProducts(undefined,this.selectedValue).subscribe((data:Product[])=>{
      this.productsList = data;
    })
  }
}
