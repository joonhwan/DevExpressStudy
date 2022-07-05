using DevExtremeWebPackDemo1.Model;
using FluentValidation.AspNetCore;
using Markdig;
using Markdig.Extensions.AutoIdentifiers;
using Westwind.AspNetCore.Markdown;
using Markdig.SyntaxHighlighting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services
    .AddMarkdown(config =>
    {
        // optional Tag BlackList
        config.HtmlTagBlackList = "script|iframe|object|embed|form"; // default

        // // Simplest: Use all default settings
        // var folderConfig = config.AddMarkdownProcessingFolder("/docs/", "~/Pages/__MarkdownPageTemplate.cshtml");
        //
        // // Customized Configuration: Set FolderConfiguration options
        // folderConfig = config.AddMarkdownProcessingFolder("/posts/", "~/Pages/__MarkdownPageTemplate.cshtml");
        //
        // // Optionally strip script/iframe/form/object/embed tags ++
        // folderConfig.SanitizeHtml = false; //  default
        //
        // // Optional configuration settings
        // folderConfig.ProcessExtensionlessUrls = true; // default
        // folderConfig.ProcessMdFiles = true; // default
        //
        // // Optional pre-processing - with filled model
        // folderConfig.PreProcess = (model, controller) =>
        // {
        //     // controller.ViewBag.Model = new MyCustomModel();
        // };

        // folderConfig.BasePath = "https://github.com/RickStrahl/Westwind.AspNetCore.Markdow/raw/master";

        // Create your own IMarkdownParserFactory and IMarkdownParser implementation
        // to replace the default Markdown Processing
        //config.MarkdownParserFactory = new CustomMarkdownParserFactory();                 

        // optional custom MarkdigPipeline (using MarkDig; for extension methods)
        config.ConfigureMarkdigPipeline = builder =>
        {
            builder
                .UseEmphasisExtras()
                .UsePipeTables()
                .UseGridTables()
                .UseAutoIdentifiers(AutoIdentifierOptions.GitHub) // Headers get id="name" 
                .UseAutoLinks() // URLs are parsed into anchors
                .UseAbbreviations()
                .UseYamlFrontMatter()
                .UseEmojiAndSmiley(true)
                .UseListExtras()
                .UseFigures()
                .UseTaskLists()
                .UseCustomContainers()
                //.DisableHtml()   // renders HTML tags as text including script
                .UseGenericAttributes()
                .UseBootstrap()
                .UseAdvancedExtensions()
                .UseSyntaxHighlighting();
        };
    })
    .AddMvc()
    .AddApplicationPart(typeof(MarkdownPageProcessorMiddleware).Assembly)
    .AddJsonOptions(options => { options.JsonSerializerOptions.PropertyNamingPolicy = null; })
    .AddFluentValidation(options => { options.RegisterValidatorsFromAssemblyContaining<GenerationOptionValidator>(); })
    ;

builder.Services
    .AddControllers()
    ;

var app = builder.Build();

string PrettifyHtml(string content)
{
    var parser = new AngleSharp.Html.Parser.HtmlParser();
    var document = parser.ParseDocument(content);

    var sw = new StringWriter();
    document.ToHtml(sw, new AngleSharp.Html.PrettyMarkupFormatter());
    return sw.ToString();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.Use(async (context, next) =>
    // {
    //     if (context.Request.Method == "GET")
    //     {
    //         var body = context.Response.Body;
    //
    //         using var updatedBody = new MemoryStream();
    //         context.Response.Body = updatedBody;
    //
    //         await next();
    //
    //         updatedBody.Seek(0, SeekOrigin.Begin);
    //         if (context.Response.ContentType.StartsWith("text/html"))
    //         {
    //             context.Response.Body = body;
    //
    //             var newContent = new StreamReader(updatedBody).ReadToEnd();
    //
    //             var prettifiedHtml = PrettifyHtml(newContent);
    //             await context.Response.WriteAsync(prettifiedHtml);
    //         }
    //         else
    //         {
    //             await updatedBody.CopyToAsync(body);
    //             context.Response.Body = body;
    //             // context.Response.ContentLength = updatedBody.Length;
    //         }
    //     }
    //     else
    //     {
    //         await next();
    //     }
    // });
}
else
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    // app.UseHsts();
}

// app.UseHttpsRedirection();

app.UseMarkdown();
app.UseStaticFiles();

app.UseRouting();

// app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(e =>
{
    e.MapControllers();
    e.MapRazorPages();
});
// app.MapRazorPages();

app.Run();