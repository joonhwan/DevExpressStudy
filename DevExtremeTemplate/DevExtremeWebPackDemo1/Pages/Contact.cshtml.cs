using System.ComponentModel.DataAnnotations;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DevExtremeWebPackDemo1.Pages;

public class ContactModel : PageModel
{
    private readonly ILogger<ContactModel> _logger;

    public ContactModel(ILogger<ContactModel> logger)
    {
        _logger = logger;
        Input = new InputModel()
        {
            Message = "메시지에요~",
            Subject = "주제네요!",
        };
    }
    
    [BindProperty]
    public InputModel Input { get; set; }
    
    public void OnGet()
    {
        _logger.LogInformation("Contact 페이지 GET 요청 받음");
    }

    public IActionResult OnPost()
    {
        _logger.LogInformation("Contact 페이지 POST 요청 받음");
        
        if (ModelState.IsValid)
        {
            _logger.LogInformation("모델 정상 임. 리디렉션됨");
            return RedirectToPage("Privacy");
        }

        _logger.LogInformation("Model 정상 아님 : {Message}", ModelState.Values.FirstOrDefault()?.Errors.FirstOrDefault()?.ErrorMessage);
        return Page();
    }
    
    public class InputModel
    {
        // [Required]
        // [StringLength(30, MinimumLength = 3)]
        public string Subject { get; set; }

        // [Required(ErrorMessage = "Please enter a message.")]
        public string Message { get; set; }
        
        public List<string> Tags { get; set; } 
    }

    public class InputValidator : AbstractValidator<InputModel>
    {
        public InputValidator()
        {
            RuleFor(x => x.Subject).NotNull().Length(3, 30);
            RuleFor(x => x.Message).NotNull().MinimumLength(5).WithMessage("메시지를 꼭 넣어야 한다니까요!");
        }
    }
}