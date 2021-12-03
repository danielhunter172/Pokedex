using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Net.Http;
using System.Threading.Tasks;
using Domain.Models;
using Domain.Models.PokemonDetails;
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
        
        public async Task<PokemonDetailed> Get(int id)
        {
            var response = await _http.GetAsync("https://pokeapi.co/api/v2/pokemon/" + id);
            var content = await response.Content.ReadAsStringAsync();
            var jsonPoke = JObject.Parse(content);

            response = await _http.GetAsync("https://pokeapi.co/api/v2/pokemon-species/" + id);
            content = await response.Content.ReadAsStringAsync();
            var jsonSpec = JObject.Parse(content);

            PokemonDetailed pokemon = new PokemonDetailed()
            {
                id = jsonPoke["id"].ToObject<long>(),
                name = jsonPoke["name"].ToString(),
                base_experience = jsonPoke["base_experience"].ToObject<int>(),
                height = jsonPoke["height"].ToObject<int>(),
                weight = jsonPoke["weight"].ToObject<int>(),
                location_area_encounters = jsonPoke["location_area_encounters"].ToString(),
                sprite = jsonPoke["sprites"]["front_default"].ToString(),

                capture_rate = jsonSpec["capture_rate"].ToObject<int>(),
                description = jsonSpec["flavor_text_entries"][0]["flavor_text"].ToString(),
                growth_rate = jsonSpec["growth_rate"]["name"].ToString(),
                
                stats = new List<Stat>(),
                abilities = new List<string>(),
                moves = new List<string>(),
                egg_groups = new List<string>()
            };
            
            foreach (var stat in jsonPoke["stats"])
            {
                pokemon.stats.Add(new Stat()
                {
                    base_stat = stat["base_stat"].ToObject<int>(),
                    name = stat["stat"]["name"].ToString()
                });
            }

            foreach (var ability in jsonPoke["abilities"])
            {
                pokemon.abilities.Add(ability["ability"]["name"].ToString());
            }

            foreach (var move in jsonPoke["moves"])
            {
                pokemon.moves.Add(move["move"]["name"].ToString());
            }

            foreach (var group in jsonSpec["egg_groups"])
            {
                pokemon.egg_groups.Add(group["name"].ToString());
            }
            
            return pokemon;
        }
    }
}