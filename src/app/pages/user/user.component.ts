import {  afterRender, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
  private _apiService = inject(ApiService);
  loginStatus:boolean = false;
  constructor() {}
  ngOnInit(): void {
    this._apiService.currentUser.subscribe(data=>{
      console.log(data)
      this.loginStatus = data ? true : false;
    })
  }
}