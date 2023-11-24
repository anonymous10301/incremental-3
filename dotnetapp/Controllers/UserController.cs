using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    

    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Register(User user)
        {
            User newUser=new User();
            if(user.UserName!=null && user.Password!=null)
            {
            newUser.UserName=user.UserName;
            newUser.Password=user.Password;
            return Ok();

            }
            return NotFound();
        }
        public IActionResult Login(User user)
        {
            if(user.UserName=="admin" && user.Password=="root")
            return Ok();
            return NotFound();
        }

        
    }
}