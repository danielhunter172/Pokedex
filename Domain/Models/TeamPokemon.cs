namespace Domain.Models
{
    public class TeamPokemon
    {
        public int Id { get; set; }
        public int? PokemonId { get; set; }
        public string? Name { get; set; }
        public string? Image { get; set; }
        public string? Type1 { get; set; }
        public string? Type2 { get; set; }
        public string? Move1 { get; set; }
        public string? Move2 { get; set; }
        public string? Move3 { get; set; }
        public string? Move4 { get; set; }
    }
}