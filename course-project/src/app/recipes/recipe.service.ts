import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping_list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Igor Recipe',
    'This is only a test.', 
    'https://img.itdg.com.br/tdg/images/blog/uploads/2020/04/receitas-com-3-ingredientes.jpg',
    [
      new Ingredient("Queijo", 2),
      new Ingredient("Polvilho", 1)
    ]),
    new Recipe('Another recipe', 
    'This is just another test', 
    'https://images-na.ssl-images-amazon.com/images/I/816DgAmbQqL.jpg',
    [
      new Ingredient("Algo bem ruim", 10)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}