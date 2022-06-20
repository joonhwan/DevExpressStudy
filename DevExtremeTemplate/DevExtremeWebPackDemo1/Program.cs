using DevExtremeWebPackDemo1.Model;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services
    .AddRazorPages()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
    })
    .AddFluentValidation(options =>
    {
        options.RegisterValidatorsFromAssemblyContaining<GenerationOptionValidator>();
    })
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