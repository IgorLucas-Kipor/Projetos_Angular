import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping_list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping_list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/recipe_book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipe_book/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './header/recipe_book/recipe-details/recipe-details.component';
import { RecipesComponent } from './header/recipe_book/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
