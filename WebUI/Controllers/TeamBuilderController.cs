using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebUI.Controllers
{
    [Route("api/TeamBuilder")]
    [ApiController]
    public class TeamBuilderController : ControllerBase
    {
        private readonly TeamContext _context;

        public TeamBuilderController(TeamContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<TeamPokemon>> GetTeam()
        {
            return await _context.PokemonTeam.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<TeamPokemon>> PostPokemon(TeamPokemon pokemon)
        {
            _context.Add(pokemon);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTeam), new {id = pokemon.Id}, pokemon);
        }
    }
}