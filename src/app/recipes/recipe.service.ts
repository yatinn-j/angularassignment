import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "This is a test recipe",
      "this is test recipe description",
      "https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg",
      [new Ingredient("Ing1", 2), new Ingredient("Ing2", 1)]
    ),
    new Recipe(
      "This is another test recipe",
      "this is another test recipe description",
      "https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg",
      [new Ingredient("Ing3", 2), new Ingredient("Ing4", 1)]
    )
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes = () => {
    return this.recipes.slice();
  };

  getRecipe = (index: number) => {
    return this.recipes.slice()[index];
  };

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
