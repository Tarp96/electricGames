namespace ElectricGamesApi.Interfaces;

public interface IElectricGame
{

    int Id { get; set; }

    string title { get; set; }

    string platform { get; set; }

    int releaseYear { get; set; }

    string image { get; set; }

}