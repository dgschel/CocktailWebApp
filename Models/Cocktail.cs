using System;
using System.Collections.Generic;

namespace CocktailWebApp.Models
{
    public partial class Cocktail
    {
        public Cocktail()
        {
            CocktailIngredient = new HashSet<CocktailIngredient>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Instruction { get; set; }
        public string Summary { get; set; }

        public virtual ICollection<CocktailIngredient> CocktailIngredient { get; set; }
    }
}
