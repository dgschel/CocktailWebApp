import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.interface';
import { Ingredient } from '../shared/models/ingredient.interface';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  cocktails: Cocktail[];
  ingredients: Ingredient[];

  constructor(private apiService: ApiService) { }

  async ngOnInit()
  {
    this.cocktails = [
      { id: 1, name: 'david', instruction: 'Text', summary: 'some summary' },
      { id: 1, name: 'Max', instruction: 'Text', summary: 'some summary' }
    ]
    // try
    // {
    //   this.cocktails = await this.apiService.getCocktails();
    // } catch (error)
    // {
    //   console.log(error)
    // }
  }

}
