using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using System.Threading.Tasks;
using Application.Pokedex.Queries;
using Domain.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NuGet.Protocol;
using WebUI.Pages;
using JsonNamingPolicy = System.Text.Json.JsonNamingPolicy;
using JsonSerializerOptions = System.Text.Json.JsonSerializerOptions;

namespace WebUI.Controllers
{
    [Route("api/Pokedex")]
    [ApiController]
    public class PokedexController : ControllerBase
    {
        private readonly HttpClient _http;
        private GetPokemonQuery _query;
        private GetPokemonByIdQuery _idQuery;
        public PokedexController()
        {
            _http = new HttpClient();
            _query = new GetPokemonQuery(_http);
            _idQuery = new GetPokemonByIdQuery(_http);
        }
        
        [HttpGet]
        public async Task<List<Pokemon>> GetPokedex()
        {
           return await _query.Get();
        }

        [HttpGet("{id}")]
        public async Task<PokemonDetailed> GetPokemon(int id)
        {
            return await _idQuery.Get(id);
        }
    }
}