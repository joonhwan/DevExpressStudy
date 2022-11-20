using MiChef.Vite.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddRazorPages();
builder.Services.AddTransient<WeatherService>();
builder.Services.AddSingleton<ViteManifest>();
builder.Services.AddSpaStaticFiles(c =>
{
    c.RootPath = "wwwroot/dist"; // `wwwroot/dist` 를 의미.
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseHttpsRedirection();
}

app.UseStaticFiles();
app.UseRouting();
app.UseEndpoints(e =>
{
    e.MapRazorPages();
    e.MapControllers();
});
if (app.Environment.IsDevelopment())
{
    Console.WriteLine("🚀  Development Sever");
    app.UseSpa(x => { x.UseProxyToSpaDevelopmentServer("http://localhost:3000"); });
}
else
{
    app.UseSpaStaticFiles();
}

app.Run();