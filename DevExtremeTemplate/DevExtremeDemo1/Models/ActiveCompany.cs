using System.ComponentModel.DataAnnotations;

namespace DevExtremeDemo1.Models;

public class ActiveCompany {
    public int ID { get; set; }
    [Required]
    public string Name { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public int ZipCode { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public string Website { get; set; }
    public bool Active { get; set; }
}