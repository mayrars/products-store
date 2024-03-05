import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Product } from '../models/product.model';

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

  getAllCategories():Observable<Category[]> {
    return this._http.get<Category[]>(`${this.baseurl}/products/categories`)
  }

  getProductsByCategory(category: string):Observable<Category> {
    return this._http.get<Category>(`${this.baseurl}/products/category/${category}`)
  }
}
