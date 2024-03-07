import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  categoriesList:string[] = []
  private _apiService = inject(ApiService);
  menuOption: string=''
  onOption(menuOption:string){
    this.menuOption = menuOption;
  }
  ngOnInit(): void {
    this._apiService.getAllCategories().subscribe(data=>{
      this.categoriesList = data;
    })
  }
}