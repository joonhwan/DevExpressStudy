using DevExtremeDemo2.Controllers;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DevExtremeDemo2.Areas.Demo.Pages.Form;

public class Demo1 : PageModel
{
    public void OnGet()
    {
        
    }

    public ActiveCompany FirstActiveCompany => SampleData.ActiveCompanies.First();
}