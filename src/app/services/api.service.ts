import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../models/login.model';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);
  private baseurl:string = "https://fakestoreapi.com"
  currentUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserToken: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isloggedIn: boolean = false

  constructor(private cookies: CookieService) { }
  getAllProducts(limit?: number,sort?:string):Observable<Product[]> {
    const params = limit && limit!=undefined ?  `?limit=${limit}` : '';
    const params2 = sort ? params=='' ? `?sort=${sort}` : `&sort=${sort}` : '';
    return this._http.get<Product[]>(`${this.baseurl}/products${params}${params2}`)
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
  getCart(numberCart:number):Observable<any> {
    return this._http.get<any>(`${this.baseurl}/carts/user/${numberCart}`)
  }
  login(user:Login){
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('method','POST')
    };
    return this._http.post(`${this.baseurl}/auth/login`,user, httpOptions).pipe(
      tap((userData:any) =>{
        this.setToken(userData.token)
        this.isloggedIn = true
        this.currentUserToken.next(userData.token)
        this.currentUser.next(true)
      })
    )
  }
  setToken(token:string){
    this.cookies.set('token',token)
  }
  getToken() {
    return this.cookies.get("token");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
  logOut(){
    this.cookies.delete("token");
  }
  isAuthenticated():boolean{
    let token = this.currentUserToken
    console.log(token)
    return token.value!='' ? true : false
  }
  get userData():Observable<string> {
    return this.currentUserToken.asObservable();
  }
  get userLoginOn():Observable<boolean> {
    return this.currentUser.asObservable();
  }
  addToCart(id:number,userId:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('method','POST')
    };
    return this._http.post(`${this.baseurl}/carts/`,{products:[{productId:id}]},httpOptions)
  }
}
