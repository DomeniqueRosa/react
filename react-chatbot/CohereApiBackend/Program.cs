var builder = WebApplication.CreateBuilder(args);

// Configura CORS para liberar qualquer origem, método e header
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Add configuration and services
builder.Services.AddHttpClient<CohereChatService>();
builder.Services.AddControllers();

var app = builder.Build();

// ✅ Adicione isso ANTES de mapear os controllers
app.UseCors("AllowAll");  // <-- ESSENCIAL

app.MapControllers();
app.Run();
