using Microsoft.EntityFrameworkCore;

namespace Domain.Models
{
    public class TeamContext : DbContext
    {
        public TeamContext(DbContextOptions<TeamContext> options)
            : base(options)
        {
            
        }

        public DbSet<TeamPokemon> PokemonTeam { get; set; } = null!;
    }
}