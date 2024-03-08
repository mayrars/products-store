import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
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
  private _apiService = inject(ApiService);
  
  onOption(menuOption:string){
    this.menuOption = menuOption;
  }
  ngOnInit(): void {
    this._apiService.getAllCategories().subscribe(data=>{
      this.categoriesList = data;
    })
  }
}
