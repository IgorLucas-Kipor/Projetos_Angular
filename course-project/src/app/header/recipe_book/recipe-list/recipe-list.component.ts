import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Igor Recipe', 'This is only a test.', 'https://img.itdg.com.br/tdg/images/blog/uploads/2020/04/receitas-com-3-ingredientes.jpg'),
    new Recipe('Another recipe', 'This is just another test', 'https://images-na.ssl-images-amazon.com/images/I/816DgAmbQqL.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
