import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  categoriesList: string[] = [];
  private _apiService = inject(ApiService);
  ngOnInit(): void {
    this._apiService.getAllCategories().subscribe(data => {
      this.categoriesList = data;
    })
  }
}
