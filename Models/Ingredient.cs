using System;
using System.Collections.Generic;

namespace CocktailWebApp.Models
{
    public partial class Ingredient
    {
        public Ingredient()
        {
            CocktailIngredient = new HashSet<CocktailIngredient>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<CocktailIngredient> CocktailIngredient { get; set; }
    }
}
