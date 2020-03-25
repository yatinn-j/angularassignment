import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredientSeleceted = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatoes", 10)
  ];

  getIngredients = () => {
    return this.ingredients.slice();
  };

  getIngredient = (index: number) => {
    return this.ingredients[index];
  };

  addIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientSeleceted.next(this.ingredients.slice());
  };

  addIngredients = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientSeleceted.next(this.ingredients.slice());
  };

  updateIngredients = (index: number, newIngredient: Ingredient) => {
    this.ingredients[index] = newIngredient;
    this.ingredientSeleceted.next(this.ingredients.slice());
  };

  deleteIngredients = (index: number) => {
    this.ingredients.splice(index, 1);
    this.ingredientSeleceted.next(this.ingredients.slice());
  };

  constructor() {}
}
