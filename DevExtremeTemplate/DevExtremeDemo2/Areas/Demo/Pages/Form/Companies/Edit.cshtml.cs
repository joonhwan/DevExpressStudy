using DevExtremeDemo2.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DevExtremeDemo2.Areas.Demo.Pages.Form.Companies;

public class Edit : PageModel
{
    private readonly ILogger<Edit> _logger;

    public Edit(ILogger<Edit> logger)
    {
        _logger = logger;
    }
    
    [BindProperty]
    public int Id { get; set; }
    
    [BindProperty]
    public ActiveCompany ActiveCompany { get; set; }    

    public IActionResult OnGet(int id)
    {
        Id = id;
        ActiveCompany = SampleData.ActiveCompanies.First(x => x.ID == id);
        _logger.LogInformation("Company : {Company}", ActiveCompany.ToString());
        return Page();
        
    }

    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            // ReSharper disable once TemplateIsNotCompileTimeConstantProblem
            _logger.LogError(message: string.Join(", ", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage)));
            return Page();
        }

        await Task.Delay(0);
        
        _logger.LogInformation("모델(Id={Id}) : {Data}", Id, ActiveCompany?.ToString());
        var target = SampleData.ActiveCompanies.First(x => x.ID == Id);
        target.Name = ActiveCompany!.Name;
        return RedirectToPage("./Index");
    }
}