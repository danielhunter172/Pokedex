using System.Collections.Generic;
using System.Collections.Immutable;
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
            var json = JObject.Parse(content);

            var data = json["result"];
            
            response = await _http.GetAsync("https://pokeapi.co/api/v2/pokemon-species/" + id);
            content = await response.Content.ReadAsStringAsync();
            json = JObject.Parse(content);

            var dataSpecies = json["result"];
            
            PokemonDetailed pokemon = new PokemonDetailed()
            {
                id = data["id"].ToObject<long>(),
                name = data["name"].ToString(),
                base_experience = data["base_experience"].ToObject<int>(),
                height = data["height"].ToObject<int>(),
                weight = data["weight"].ToObject<int>(),
                location_area_encounters = data["location_area_encounters"].ToString(),
                sprite = data["sprites"]["front_default"].ToString(),
                
                capture_rate = dataSpecies["capture_rate"].ToObject<int>(),
                description = dataSpecies["flavor_text_entries"][0]["flavor_text"].ToString(),
                growth_rate = dataSpecies["growth_rate"]["name"].ToString()
            };

            int i = 0;
            foreach (var stat in data["stats"])
            {
                pokemon.stats[i] = new Stat()
                {
                    base_stat = stat["base_stat"].ToObject<int>(),
                    name = stat["stat"]["name"].ToString()
                };
                i++;
            }

            i = 0;
            foreach (var ability in data["abilities"])
            {
                pokemon.abilities[i] = ability["ability"]["name"].ToString();
                i++;
            }

            i = 0;
            foreach (var move in data["moves"])
            {
                pokemon.moves[i] = move["move"]["name"].ToString();
                i++;
            }

            i = 0;
            foreach (var group in dataSpecies["egg_groups"])
            {
                pokemon.egg_groups[i] = group["name"].ToString();
                i++;
            }
            
            return pokemon;
        }
    }
}