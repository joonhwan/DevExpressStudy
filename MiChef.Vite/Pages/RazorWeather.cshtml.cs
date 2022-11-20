using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiChef.Vite.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MiChef.Vite.Pages
{
    public class RazorWeatherModel : PageModel
    {
        private readonly WeatherService _weatherService;

        public RazorWeatherModel(WeatherService weatherService)
        {
            _weatherService = weatherService;
            WeatherForecasts = Array.Empty<WeatherForecast>();
        }
        
        public WeatherForecast[] WeatherForecasts { get; set; }
        
        public void OnGet()
        {
            WeatherForecasts = _weatherService.GetWeathers().ToArray();
        }
    }
}
