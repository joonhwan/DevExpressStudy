using System.ComponentModel.DataAnnotations;

namespace DevExtremeDemo1.Models;

public class ActiveCompany {
    public int ID { get; set; }
    [Required]
    public string Name { get; set; } = null!;
    public string Address { get; set; }= null!;
    public string City { get; set; }= null!;
    public string State { get; set; }= null!;
    public int ZipCode { get; set; }
    public string Phone { get; set; }= null!;
    public string Fax { get; set; }= null!;
    public string Website { get; set; }= null!;
    public bool Active { get; set; }
}