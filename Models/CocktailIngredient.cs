using System;
using System.Collections.Generic;

namespace CocktailWebApp.Models
{
    public partial class CocktailIngredient
    {
        public int Id { get; set; }
        public int CocktailId { get; set; }
        public int IngredientId { get; set; }
        public string Measure { get; set; }

        public virtual Cocktail Cocktail { get; set; }
        public virtual Ingredient Ingredient { get; set; }
    }
}
