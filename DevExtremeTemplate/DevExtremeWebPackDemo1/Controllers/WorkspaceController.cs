using Microsoft.AspNetCore.Mvc;

namespace DevExtremeWebPackDemo1.Controllers;

[Route("/api/[controller]/[action]")]
[ApiController]
public class WorkspaceController : ControllerBase
{
    [HttpGet]
    public IActionResult Greet()
    {
        return Ok(new
        {
            Message = "Hello"
        });
    }
}