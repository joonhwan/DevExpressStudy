using Microsoft.AspNetCore.Mvc;

namespace DevExtremeDemo1.Controllers;

public class FileManagerController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }
    
}