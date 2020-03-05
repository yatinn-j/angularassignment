import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("This is a test recipe", "this is test recipe description", "https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg"),
    new Recipe("This is another test recipe", "this is another test recipe description", "https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg")
  ];
  @Output() selectedItem = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  recipeItemClicked = (recipe: Recipe) => {
    this.selectedItem.emit(recipe);
  }

}
