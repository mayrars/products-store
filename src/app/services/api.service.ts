import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);
  private baseurl:string = "https://fakestoreapi.com"
  currentUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserToken: BehaviorSubject<string> = new BehaviorSubject<string>('');
  

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
  login(user:{}){
    const nuser = JSON.stringify(user)
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('method','POST')
    };
    return this._http.post(`${this.baseurl}/auth/login`,user, httpOptions).pipe(
      tap((userData:any) =>{
        this.currentUserToken.next(userData)
        this.currentUser.next(true) 
      })
    )
  }
  logOut(){
    localStorage.removeItem('token')
    this.currentUserToken.next('')
    this.currentUser.next(false)
  }
  isAuthenticated():boolean{    
    let token = this.currentUser
    return token!=null || token!='' ? true : false
  }
  get userData():Observable<string> {
    return this.currentUserToken.asObservable();
  }
  get userLoginOn():Observable<boolean> {
    return this.currentUser.asObservable();
  }
}