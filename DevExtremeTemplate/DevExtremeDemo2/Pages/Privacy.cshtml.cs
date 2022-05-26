using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DevExtremeDemo2.Pages;

public class PrivacyModel : PageModel
{
    private readonly ILogger<PrivacyModel> _logger;

    public PrivacyModel(ILogger<PrivacyModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        _logger.LogInformation("은밀한 페이지 접근 : {UserName}", User.Identity?.Name);
        UserName = User.Identity?.Name ?? String.Empty;

    }

    [BindProperty]
    public string UserName { get; set; } = string.Empty;
}