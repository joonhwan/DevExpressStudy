using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DevExtremeDemo2.Controllers;

[AllowAnonymous]
[Route("/api/company")]
public class CompanyController : Controller
{
    [HttpGet("getcompanies")]
    public object GetCompanies(DataSourceLoadOptions loadOptions) {
        var result = DataSourceLoader.Load(SampleData.ActiveCompanies, loadOptions);
        return result;
    }
}

public class ActiveCompany {
    public int ID { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public int ZipCode { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public string? Website { get; set; }
    public bool Active { get; set; }

    public override string ToString()
    {
        return $"{nameof(ID)}: {ID}, {nameof(Name)}: {Name}";
    }
}

public class SampleData {
    public static readonly List<ActiveCompany> ActiveCompanies = new() {
        new ActiveCompany() {
            ID = 1,
            Name = "Super Mart of the West",
            Address = "702 SW 8th Street",
            City = "Bentonville",
            State = "Arkansas",
            ZipCode = 72716,
            Phone = "(800) 555-2797",
            Fax = "(800) 555-2171",
            Website = "",
            Active = true
        },
        new ActiveCompany() {
            ID = 2,
            Name = "Electronics Depot",
            Address = "2455 Paces Ferry Road NW",
            City = "Atlanta",
            State = "Georgia",
            ZipCode = 30339,
            Phone = "(800) 595-3232",
            Fax = "(800) 595-3231",
            Website = "",
            Active = true
        },
        new ActiveCompany() {
            ID = 3,
            Name = "K&S Music",
            Address = "1000 Nicllet Mall",
            City = "Minneapolis",
            State = "Minnesota",
            ZipCode = 55403,
            Phone = "(612) 304-6073",
            Fax = "(612) 304-6074",
            Website = "",
            Active = true
        },
        new ActiveCompany() {
            ID = 4,
            Name = "Tom's Club",
            Address = "999 Lake Drive",
            City = "Issaquah",
            State = "Washington",
            ZipCode = 98027,
            Phone = "(800) 955-2292",
            Fax = "(800) 955-2293",
            Website = "",
            Active = true
        }
    };
}