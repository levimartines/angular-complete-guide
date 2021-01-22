import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Fish', 3),
    new Ingredient('Flour', 1000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
