using DevExtreme.AspNet.Mvc.FileManagement;
using Microsoft.AspNetCore.Mvc;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace DevExtremeDemo1.Controllers;

public class FileManagerApiController : Controller
{
    static readonly string SampleImagesRelativePath = Path.Combine("SampleData", "SampleImages");

    public FileManagerApiController(IWebHostEnvironment hostingEnvironment) {
        HostingEnvironment = hostingEnvironment;
    }
    public IWebHostEnvironment HostingEnvironment { get; }

    [Route("api/file-manager-file-system-images", Name = "FileManagementImagesApi")]
    public object FileSystem(FileSystemCommand command, string arguments) {
        var config = new FileSystemConfiguration {
            Request = Request,
            FileSystemProvider = new PhysicalFileSystemProvider(
                Path.Combine(HostingEnvironment.WebRootPath, SampleImagesRelativePath),
                (fileSystemItem, clientItem) => {
                    if(!clientItem.IsDirectory)
                        clientItem.CustomFields["url"] = GetFileItemUrl(fileSystemItem);
                }
            ),
            //uncomment the code below to enable file/directory management
            //AllowCopy = true,
            //AllowCreate = true,
            //AllowMove = true,
            //AllowDelete = true,
            //AllowRename = true,
            //AllowUpload = true,
            AllowDownload = true
        };
        var processor = new FileSystemCommandProcessor(config);
        var result = processor.Execute(command, arguments);
        return result.GetClientCommandResult();
    }

    string GetFileItemUrl(FileSystemInfo fileSystemItem) {
        var relativeUrl = fileSystemItem.FullName
            .Replace(HostingEnvironment.WebRootPath, "")
            .Replace(Path.DirectorySeparatorChar, '/');
        return $"{Request.Scheme}://{Request.Host}{Request.PathBase}{relativeUrl}";
    }      
}