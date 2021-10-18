import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Recipe} from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe
  id: number;
  constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.getRecipe(this.id);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.activeRoute});
  }

}