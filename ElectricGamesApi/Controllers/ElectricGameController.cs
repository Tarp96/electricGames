using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;
using ElectricGamesApi.Contexts;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class ElectricGameController : ControllerBase
{
    private readonly ElectricGameContext context;

    public ElectricGameController(ElectricGameContext _context)
    {
        context = _context;
    }


    [HttpGet]
    public async Task<ActionResult<List<ElectricGame>>> Get()
    {
        try
        {
            List<ElectricGame> electricgames = await context.ElectricGames.ToListAsync();
            return Ok(electricgames);
        }

        catch
        {
            return StatusCode(500);
        }


    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ElectricGame>> Get(int id)
    {
        ElectricGame? electricgame = await context.ElectricGames.FindAsync(id);

        if (electricgame != null)
        {
            return Ok(electricgame);
        }
        else
        {
            return NotFound();
        }

    }


    [HttpGet]
    [Route("[action]/{title}")]
    public async Task<ActionResult<List<ElectricGame>>> Get(string title)
    {

        List<ElectricGame>? electricGames = await context.ElectricGames.Where(g => g.title == title).ToListAsync();

        if (electricGames != null)
        {
            return electricGames;
        }

        else
        {
            return NotFound();
        }

    }




    [HttpPost]

    public IActionResult Post(ElectricGame newElectricGame)
    {
        try
        {
            context.ElectricGames.Add(newElectricGame);
            context.SaveChanges();
            return CreatedAtAction("Get", new { id = newElectricGame.Id }, newElectricGame);
        }

        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut]
    public IActionResult Put(ElectricGame editedElectricGame)
    {
        context.Entry(editedElectricGame).State = EntityState.Modified;
        context.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]

    public IActionResult Delete(int id)
    {
        ElectricGame? electricgameToDelete = context.ElectricGames.Find(id);

        if (electricgameToDelete != null)
        {
            context.ElectricGames.Remove(electricgameToDelete);
            context.SaveChanges();
            return NoContent();
        }

        else
        {
            return NotFound();
        }
    }





}
