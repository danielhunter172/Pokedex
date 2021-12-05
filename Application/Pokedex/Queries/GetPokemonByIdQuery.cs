using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
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
                height = jsonPoke["height"].ToObject<float>() / 10f,
                weight = jsonPoke["weight"].ToObject<float>() / 10f,
                location_area_encounters = jsonPoke["location_area_encounters"].ToString(),
                sprite = jsonPoke["sprites"]["front_default"].ToString(),

                capture_rate = jsonSpec["capture_rate"].ToObject<int>(),
                growth_rate = jsonSpec["growth_rate"]["name"].ToString(),
                gender_rate = jsonSpec["gender_rate"].ToObject<float>() * 12.5f,
                
                stats = new List<Stat>(),
                abilities = new List<string>(),
                types = new List<string>(),
                moves = new List<string>(),
                egg_groups = new List<string>()
            };

            jsonSpec["flavor_text_entries"].Any(x =>
            {
                if (x["language"]["name"].ToString() == "en" && (x["version"]["name"].ToString() == "shield" || x["version"]["name"].ToString() == "omega-ruby"))
                {
                    pokemon.description = x["flavor_text"].ToString();
                    return true;
                }

                return false;
            });
            
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

            foreach (var type in jsonPoke["types"])
            {
                pokemon.types.Add(type["type"]["name"].ToString());
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