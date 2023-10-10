using Microsoft.AspNetCore.Mvc;
using ElectricGamesApi.Models;
using ElectricGamesApi.Contexts;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class FileUploadController : ControllerBase
{
    private readonly IWebHostEnvironment hosting;

    public FileUploadController(IWebHostEnvironment _hosting)
    {
        hosting = _hosting;
    }

    [HttpPost]
    public IActionResult SaveImage(IFormFile file)
    {
        string webRootPath = hosting.WebRootPath;
        string asbolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");

        using (var filesStream = new FileStream(asbolutePath, FileMode.Create))
        {
            file.CopyTo(filesStream);
        }

        return Ok();
    }
}