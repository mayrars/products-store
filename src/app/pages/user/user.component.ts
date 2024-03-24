import {  afterRender, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit, OnDestroy{
  private _apiService = inject(ApiService);
  loginStatus:boolean = false;
  constructor() { 
    afterRender(()=>{
      this._apiService.currentUser.subscribe(data=>{
        this.loginStatus = data ? true : false;
      })
    })
  }

  ngOnDestroy(): void {
    this._apiService.currentUser.unsubscribe()
    this._apiService.currentUserToken.unsubscribe()
  }

  ngOnInit(): void {
    
  }

}