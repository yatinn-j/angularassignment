import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientSeleceted = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatoes", 10),
  ];

  getIngredients = () => {
    return this.ingredients.slice();
  }

  addIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientSeleceted.emit(this.ingredients.slice());
  }

  addIngredients = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientSeleceted.emit(this.ingredients.slice());
  }

  constructor() { }
}
