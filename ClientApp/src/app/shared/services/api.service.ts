import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.interface';
import { Ingredient } from '../models/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService
{
  private apiUrl = 'https://localhost:5001/';
  private cocktailEndpoint = 'cocktail';
  private ingredientEndpoint = 'ingredient';

  constructor(private httpClient: HttpClient) { }

  public getCocktails(): Promise<Cocktail[]>
  {
    return this.httpClient.get<Cocktail[]>(this.apiUrl + this.cocktailEndpoint).toPromise();
  }

  public getIngredients(): Promise<Ingredient[]>
  {
    return this.httpClient.get<Ingredient[]>(this.apiUrl + this.ingredientEndpoint).toPromise();
  }
}
