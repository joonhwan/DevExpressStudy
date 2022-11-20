using System.Diagnostics.CodeAnalysis;
using System.Text.Json;

namespace MiChef.Vite.Controllers;

public class ViteManifest
{
    private readonly IWebHostEnvironment _env;
    public Dictionary<string, ManifestRecord>? Manifest;

    public ViteManifest(IWebHostEnvironment env)
    {
        _env = env;
        
        var filePath = Path.Combine(_env.WebRootPath, "dist/manifest.json");
        var json = File.ReadAllText(filePath);
        Manifest = JsonSerializer.Deserialize<Dictionary<string, ManifestRecord>>(json);
        Console.WriteLine(Manifest);
    }

    public ManifestRecord? GetManifest(string entryPath)
    {
        if (Manifest?.TryGetValue(entryPath, out var manifestRecord) == true)
        {
            return manifestRecord;
        }

        return new ManifestRecord
        {
            src = entryPath,
            isEntry = true,
        };
    }
}

// public class ViteManifestModel
// {
//     public string EntryPath { get; set; }
//     public ManifestRecord ManifestRecord { get; set; }
// }

[SuppressMessage("ReSharper", "InconsistentNaming")]
public class ManifestRecord
{
    public string? file { get; set; }
    public string? src { get; set; }
    public string[]? css { get; set; }
    public bool isEntry { get; set; }
}