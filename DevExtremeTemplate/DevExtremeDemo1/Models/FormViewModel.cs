namespace DevExtremeDemo1.Models;

public class FormViewModel
{
    public int ID { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string CompanyName { get; set; } = null!;
    public string Position { get; set; } = null!;
    public string OfficeNo { get; set; } = null!;
    public DateTime BirthDate { get; set; }
    public DateTime HireDate { get; set; }
    public string Address { get; set; } = null!;
    public string City { get; set; } = null!;
    public string State { get; set; } = null!;
    public string Zipcode { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Skype { get; set; } = null!;
    public string Notes { get; set; } = null!;
}