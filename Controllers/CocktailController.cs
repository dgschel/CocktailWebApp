using System.Collections.Generic;
using System.Linq;
using CocktailWebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CocktailWebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CocktailController : ControllerBase {
        private readonly CocktailDatabaseContext _context;

        public CocktailController(CocktailDatabaseContext context) {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Cocktail> Get() {
            return _context.Cocktail.ToList<Cocktail>();
        }
    }
}