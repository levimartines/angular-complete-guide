import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(' Baked Fish Fillets with Thyme-Dijon Topping',
      'This is a simple tes', 'https://www.diabetesfoodhub.org/system/thumbs/system/images/recipes/64-baked-fish-fillets-diabetic_523150835_011419_2_1605712890.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
