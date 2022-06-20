using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace DevExtremeWebPackDemo1.Controllers;


[Route("/api/v1/tags")]
[ApiController]
public class TagsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll(string? search = null)
    {
        var result = SampleTags.Data
                .Where(x => string.IsNullOrEmpty(search) ||
                            x.ToLower().StartsWith(search.ToLower()))
                .Select(x => new
                {
                    id = x,
                    text = x
                })
                .ToList()
            ;
        
        return Ok(result);
    }
}


public class SampleTags
{
    public static string[] Data = new[]
    {
        "SEM",
        "Provision",
        "WaferMap",
        "Patch",
        "ImageNet",
        "Cifar10"
    };
}