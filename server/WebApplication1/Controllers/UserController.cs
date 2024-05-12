using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> allUsers = new List<User>()
            {
                new User { Id = 1, Name = "Tsipi", Password = "11111111", JobSearchField = JobField.Computers },
                new User { Id = 2, Name = "Chaya", Password = "22222222", JobSearchField = JobField.Computers },
                new User { Id = 3, Name = "Sari", Password = "33333333", JobSearchField = JobField.Teaching },
                new User { Id = 4, Name = "Chava", Password = "44444444", JobSearchField = JobField.Teaching },
                new User { Id = 5, Name = "Ruti", Password = "55555555", JobSearchField = JobField.Teaching },
                new User { Id = 6, Name = "Ploni", Password = "66666666", JobSearchField = JobField.Other },
                new User { Id = 7, Name = "Dassi", Password = "77777777", JobSearchField = JobField.Teaching },
                new User { Id = 8, Name = "Dina", Password = "88888888", JobSearchField = JobField.Teaching }
            };


        [HttpGet("getUser")]
        public User Get(string name, string password)
        {
            return allUsers.Find(user => user.Name == name && user.Password == password);
        }

    }
}
