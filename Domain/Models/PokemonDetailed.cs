using Domain.Models.PokemonDetails;

namespace Domain.Models
{
    public class PokemonDetailed
    {
        public long id { get; set; }
        public string name { get; set; }
        public int capture_rate { get; set; }
        public int base_experience { get; set; }
        public int height { get; set; }
        public int weight { get; set; }
        public string location_area_encounters { get; set; }
        public Stat[] stats { get; set; }
        public string[] abilities { get; set; }
        public string[] moves { get; set; }
        public string[] sprites { get; set; }
        public string[] egg_groups { get; set; }
        public string description { get; set; }
        public string growth_rate { get; set; }
    }
}