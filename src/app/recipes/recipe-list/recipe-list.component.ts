import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Quindim', 'Melhor doce da face da terra.', 'https://img.itdg.com.br/tdg/images/recipes/000/001/418/355466/355466_original.jpg?mode=crop&width=710&height=400'),
    new Recipe('Quindim', 'Melhor doce da face da terra.', 'https://img.itdg.com.br/tdg/images/recipes/000/001/418/355466/355466_original.jpg?mode=crop&width=710&height=400'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
