using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DevExtremeDemo2.Areas.Demo.Pages.Form;

public class SubmitValidate : PageModel
{
    private readonly ILogger<SubmitValidate> _logger;

    public SubmitValidate(ILogger<SubmitValidate> logger)
    {
        _logger = logger;
    }
    
    public IActionResult OnGet()
    {
        return Page();
    }
}