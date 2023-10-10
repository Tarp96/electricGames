using System.ComponentModel.DataAnnotations;
namespace ElectricGamesApi.Models;

using ElectricGamesApi.Interfaces;

public class ElectricGame : IElectricGame
{
    [Key]
    public int Id { get; set; }

    public string title { get; set; } = "";

    public int releaseYear { get; set; }

    public string platform { get; set; } = "";

    public string image { get; set; } = null!;


}