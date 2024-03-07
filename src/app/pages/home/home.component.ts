import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { TitleCasePipe} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleCasePipe, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  categoriesList:string[] =[] 
  private _apiService = inject(ApiService);
  ngOnInit(): void {
    this._apiService.getAllCategories().subscribe(data=>{
      this.categoriesList = data
    })
  }
}
