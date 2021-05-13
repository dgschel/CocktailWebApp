using System.Collections.Generic;
using System.Linq;
using CocktailWebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CocktailWebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IngredientController : ControllerBase
    {
        private readonly CocktailDatabaseContext _context;

        public IngredientController(CocktailDatabaseContext context) {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Ingredient> Get()
        {
            return _context.Ingredient.ToList<Ingredient>();
        }
    }
}