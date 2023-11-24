using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{

    
[ApiController]
[Route("/[Controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("ListPlayers")]
        public IActionResult GetPlayers()
        {
             var data=_context.Players.ToList();
             if(data==null)
             return NotFound();
             return Ok(data);
        }

        [HttpGet]
        [Route("GetPlayer/{id}")]
        public IActionResult GetPlayerById(int id)
        {
            var data=_context.Players.Find(id);
            if(data==null)
            return NotFound();
            return Ok(data);
        }

       
        [HttpPut]
       [Route("EditPlayer/{id}")]
    public IActionResult PutPlayer(int id,Player editedPlayer)
    {
        try{
        Player oldPlayer=_context.Players.Find(id);
        oldPlayer.Name=editedPlayer.Name;
        oldPlayer.Age=editedPlayer.Age;
        oldPlayer.Category=editedPlayer.Category;
        oldPlayer.BiddingPrice=editedPlayer.BiddingPrice;
        oldPlayer.TeamId=editedPlayer.TeamId;
        _context.SaveChanges();
        return Ok();
        }
        catch(Exception e)
        {
            return BadRequest();
        }
    }

    [HttpDelete]
    [Route("DeletePlayer/{id}")]
    public IActionResult DeletePlayer(int id)
    {
        try{
        Player player=_context.Players.Find(id);
       _context.Players.Remove(player);
       _context.SaveChanges();
        return Ok();
        }
        catch(Exception e)
        {
            return BadRequest();
        }
    }

    [HttpPost]
    [Route("AddPlayer")]
    public IActionResult PostPlayer(Player newPlayer)
    {
        if(ModelState.IsValid)
        {
        _context.Players.Add(newPlayer);
        _context.SaveChanges();
        return Created("Player Added",newPlayer);
        }
        return BadRequest("Cannot add Player");
    }

       [HttpGet]
       [Route("ListTeams")]
        public IActionResult GetTeams()
        {
             var data=_context.Teams.ToList();
             if(data==null)
             return NotFound();
             return Ok(data);
        }

        [HttpPost]
        [Route("AddTeam")]
     public IActionResult AddTeam(Team t)
        {

                int tID = t.Id;
                if(t.Id > 0) t.Id = 0;
 
                _context.Teams.Add(t);
                _context.SaveChanges();
 
                if(t.Id > 0) t.Id = tID;
            return Created("Added Team",t);
        }

        [HttpPut]
        [Route("EditTeam/{id}")]
        public IActionResult EditTeam(int id, Team newTeam)
        {
            Team oldTeam =_context.Teams.Find(id);
            oldTeam.Name=newTeam.Name;
            _context.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteTeam/{id}")]
        public IActionResult DeleteTeam(int id)
        {
            Team teamToDelete=_context.Teams.Find(id);
            _context.Teams.Remove(teamToDelete);
            _context.SaveChanges();
            return Ok();
        }

        

        
    }
}