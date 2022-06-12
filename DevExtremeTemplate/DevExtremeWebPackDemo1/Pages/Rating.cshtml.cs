using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace DevExtremeWebPackDemo1.Pages;

public class RatingModel : PageModel
{
    private readonly ILogger<RatingModel> _logger;

    public RatingModel(ILogger<RatingModel> logger)
    {
        _logger = logger;
        Input = new InputModel()
        {
            Ratings = new List<SelectListItem>
            {
                new SelectListItem("아주나쁨", "0"),
                new SelectListItem("나쁨", "1"),
                new SelectListItem("보통", "2", true),
                new SelectListItem("좋음", "3"),
                new SelectListItem("아주좋음", "4"),
            },
            RatingControlType = "pill",
            SelectedValue = "2",
        };
    }

    [BindProperty]
    public InputModel Input { get; set; }
    
    public void OnGet()
    {   
    }

    public IActionResult OnPost()
    {
        _logger.LogInformation("제출된 값: {Value}", Input.SelectedValue);
        return RedirectToPage("Index");
    }

    public class InputModel
    {
        public List<SelectListItem> Ratings { get; set; } = null!;
        public string RatingControlType { get; set; } = null!;
        public string SelectedValue { get; set; } = null!;
    }
}