import { Output } from '@angular/core';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() currentRecipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }


  onSelected() {
    this.recipeSelected.emit();
  }

}
