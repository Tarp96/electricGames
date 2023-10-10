#nullable disable
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Contexts;

public class ElectricGameContext : DbContext
{
    public ElectricGameContext(DbContextOptions<ElectricGameContext> options) : base(options) { }

    public DbSet<ElectricGame> ElectricGames { get; set; }
}