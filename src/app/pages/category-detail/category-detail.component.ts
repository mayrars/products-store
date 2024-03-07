import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { TitleCasePipe } from '@angular/common';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [TitleCasePipe, ProductsComponent],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.scss'
})
export class CategoryDetailComponent implements OnInit{
  productsList:Product[] = [];
  title:string = '';
  private _apiService = inject(ApiService);
  private _route = inject(ActivatedRoute)
  constructor() { }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.title = params['name'];
      this._apiService.getProductsByCategory(params['name']).subscribe((data:Product[])=>{
        this.productsList = data;
      })
    })
  }
}
