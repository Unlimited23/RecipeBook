import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Mandjata na Pesho', 'Pesho test recipe', 'https://instagram.fsof3-1.fna.fbcdn.net/vp/d6ed657e19902b00336d573f2d0f8aa0/5B28F2A8/t51.2885-15/e35/13266708_1291043794242404_1140537066_n.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
