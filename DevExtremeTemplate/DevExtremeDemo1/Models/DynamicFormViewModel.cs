namespace DevExtremeDemo1.Models;

public class DynamicFormViewModel {
    public string FirstName { get; set; }= null!;
    public string LastName { get; set; }= null!;
    public string Address { get; set; }= null!;
    public string City { get; set; }= null!;
    public List<string> Phones { get; set; } = new();
}