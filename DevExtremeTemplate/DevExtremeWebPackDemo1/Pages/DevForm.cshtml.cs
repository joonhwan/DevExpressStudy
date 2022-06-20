using DevExtremeWebPackDemo1.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DevExtremeWebPackDemo1.Pages;

public class DevFormModel : PageModel
{
    private readonly ILogger<DevFormModel> _logger;

    public DevFormModel(ILogger<DevFormModel> logger)
    {
        _logger = logger;
        SampleOption = new GenerationOption()
        {
            Name = "Sample Generation",
            Type = GenerationType.Iris,
            DefectCount = 5000,
            MaskRatio = 0.5,
            MinTime = DateTime.Now - TimeSpan.FromDays(3),
            MaxTime = DateTime.Now + TimeSpan.FromDays(4),
        };
    }
    
    [BindProperty]
    public GenerationOption SampleOption { get; set; }
    
    public void OnGet()
    {
        
    }

    public IActionResult OnPost()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }
        _logger.LogInformation("Sample Option : {SampleOption}", SampleOption.ToString());
        return RedirectToPage("Index");
    }

}