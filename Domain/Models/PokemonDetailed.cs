using System.Collections.Generic;
using Domain.Models.PokemonDetails;

namespace Domain.Models
{
    public class PokemonDetailed
    {
        public long id { get; set; }
        public string? name { get; set; }
        public int? capture_rate { get; set; }
        public int? base_experience { get; set; }
        public int? height { get; set; }
        public int? weight { get; set; }
        public string? location_area_encounters { get; set; }
        public List<Stat>? stats { get; set; }
        public List<string>? abilities { get; set; }
        public List<string>? types { get; set; }
        public List<string>? moves { get; set; }
        public string? sprite { get; set; }
        public List<string>? egg_groups { get; set; }
        public string? description { get; set; }
        public string? growth_rate { get; set; }
    }
}