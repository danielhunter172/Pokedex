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
        public PokedexController()
        {
            _http = new HttpClient();
            _query = new GetPokemonQuery(_http);
        }
        
        [HttpGet]
        public async Task<List<Pokemon>> GetPokedex()
        {
           return await _query.Get();
        }
    }
}