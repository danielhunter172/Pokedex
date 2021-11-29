using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Domain.Models;
using Newtonsoft.Json.Linq;

namespace Application.Pokedex.Queries
{
    public class GetPokemonByIdQuery
    {
        public HttpClient _http;

        public GetPokemonByIdQuery(HttpClient http)
        {
            _http = http;
        }
        
        public async Task<List<Pokemon>> Get()
        {
            var response = await _http.GetAsync("https://pokeapi.co/api/v2/pokemon/");
            var content = await response.Content.ReadAsStringAsync();
            var json = JObject.Parse(content);

            List<Pokemon> pokemonList = new List<Pokemon>();
            int i = 0;
            foreach (var pokemon in json["results"])
            {
                Pokemon poke = new Pokemon();
                poke.Id = i + 1;
                poke.Name = pokemon["name"].ToString();
                poke.ImageLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (i + 1) + ".png";
                i++;
                pokemonList.Add(poke);
            }

            return pokemonList;
        }
    }
}