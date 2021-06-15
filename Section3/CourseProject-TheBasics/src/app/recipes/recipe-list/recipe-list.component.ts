import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test recipe', 
      'This is simply a test', 
      'https://i.pinimg.com/originals/70/09/19/7009193184270fbdef1d81ee0a55a3ba.jpg'
    ),
    new Recipe(
      'A Test recipe', 
      'This is simply a test', 
      'https://i.pinimg.com/originals/70/09/19/7009193184270fbdef1d81ee0a55a3ba.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
