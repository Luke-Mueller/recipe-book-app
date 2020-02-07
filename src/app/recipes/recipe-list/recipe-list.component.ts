import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Desc', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.justataste.com%2Fwp-content%2Fuploads%2F2016%2F02%2Fquick-crispy-vegetable-fritters-recipe-1.jpg&f=1&nofb=1'),
    new Recipe('Test 2', 'Test Desc2', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.justataste.com%2Fwp-content%2Fuploads%2F2016%2F02%2Fquick-crispy-vegetable-fritters-recipe-1.jpg&f=1&nofb=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
