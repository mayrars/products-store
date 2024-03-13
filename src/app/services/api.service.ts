import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);
  private baseurl:string = "https://fakestoreapi.com"

  getAllProducts(limit?: number):Observable<Product[]> {
    const params = limit ?  `?limit=${limit}` : '';
    return this._http.get<Product[]>(`${this.baseurl}/products${params}`)
  }

  getProductById(id: number):Observable<Product> {
    return this._http.get<Product>(`${this.baseurl}/products/${id}`)
  }

  getAllCategories():Observable<any[]> {
    return this._http.get<any[]>(`${this.baseurl}/products/categories`)
  }

  getProductsByCategory(category: string,sort?:string):Observable<any> {
    const params = sort ? `?sort=${sort}` : '';
    return this._http.get<any>(`${this.baseurl}/products/category/${category}${params}`)
  }
}
