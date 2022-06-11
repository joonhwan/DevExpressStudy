using DevExtremeDemo2.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DevExtremeDemo2.Areas.Demo.Pages.Form.Companies;

public class Index : PageModel
{
    private readonly ILogger<Index> _logger;

    public Index(ILogger<Index> logger)
    {
        _logger = logger;
    }

    public IList<ActiveCompany> ActiveCompanies => SampleData.ActiveCompanies;
    
    public IActionResult OnGet()
    {
        _logger.LogInformation("어. Company Page에 방문했네요");
        return Page();
    }
}