import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  categoriesList:string[] = []
  menuOption: string=''
  loginStatus:boolean = false;
  private _apiService = inject(ApiService);
  private _router = inject(Router)
  
  onOption(menuOption:string){
    this.menuOption = menuOption;
  }
  ngOnInit(): void {
    this._apiService.getAllCategories().subscribe(data=>{
      this.categoriesList = data;
    })
    this._apiService.currentUser.subscribe({
      next:(data)=>{        
        this.loginStatus = data;
      }
    })
  }
  logOut(){
    this.loginStatus = this._apiService.isAuthenticated()
    this._apiService.logOut()
    this._router.navigate(['/'])    
  }
}
