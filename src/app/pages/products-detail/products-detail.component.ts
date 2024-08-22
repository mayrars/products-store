import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';
@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, PinchZoomModule],
templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.scss'
})
export class ProductsDetailComponent implements OnInit {
  product?:Product
  loading = true
  private _route = inject(ActivatedRoute)
  constructor(private _apiService: ApiService) { }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProductById(params['id']).subscribe((data:Product) => {
        this.product = data
        this.loading= false
      })
    })
  }
  addProductToCart(product:Product){

  }
}
