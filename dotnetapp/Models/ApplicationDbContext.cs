using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Models
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Player>Players{get;set;}
        public virtual DbSet<Team>Teams{get;set;}
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder obj)=>
        obj.UseSqlServer("User ID=sa;password=examlyMssql@123; server=localhost;Database=IplDb;trusted_connection=false;Persist Security Info=False;Encrypt=False");

        // Add DbSet properties for other entities as needed
    }
}
