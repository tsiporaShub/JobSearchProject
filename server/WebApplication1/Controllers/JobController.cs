using API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        static List<Job> jobs = new List<Job>()
        {
            new Job{JobField=JobField.Teaching,JobTitle="math teacher",ScopeOfHours=10,Area="Jerusalem",Requirements="Certificate of teaching, responsibility and ability to explain.",WorkFromHome=false},
            new Job{JobField=JobField.Computers,JobTitle="embedded developer",ScopeOfHours=30,Area="Modiin Elit",Requirements="A software engineer's degree, big-headed ambition and a desire to advance.",WorkFromHome=true},
            new Job{JobField=JobField.Other,JobTitle="cleaner",ScopeOfHours=40,Area="Tel Aviv",Requirements="Agility, responsibility and a high work ethic.",WorkFromHome=false},
            new Job{JobField=JobField.Teaching,JobTitle="math teacher",ScopeOfHours=10,Area="Modiin Elit",Requirements="Certificate of teaching, responsibility and ability to explain.",WorkFromHome=false},
            new Job{JobField=JobField.Computers,JobTitle="embedded developer",ScopeOfHours=30,Area="Modiin Elit",Requirements="A software engineer's degree, big-headed ambition and a desire to advance.",WorkFromHome=true},
            new Job{JobField=JobField.Other,JobTitle="cleaner",ScopeOfHours=40,Area="Jerusalem",Requirements="Agility, responsibility and a high work ethic.",WorkFromHome=false},
            new Job{JobField=JobField.Teaching,JobTitle="math teacher",ScopeOfHours=10,Area="Jerusalem",Requirements="Certificate of teaching, responsibility and ability to explain.",WorkFromHome=false},
            new Job{JobField=JobField.Computers,JobTitle="embedded developer",ScopeOfHours=30,Area="Modiin Elit",Requirements="A software engineer's degree, big-headed ambition and a desire to advance.",WorkFromHome=true},
            new Job{JobField=JobField.Other,JobTitle="cleaner",ScopeOfHours=40,Area="Tel Aviv",Requirements="Agility, responsibility and a high work ethic.",WorkFromHome=false},
            new Job{JobField=JobField.Teaching,JobTitle="math teacher",ScopeOfHours=10,Area="Modiin Elit",Requirements="Certificate of teaching, responsibility and ability to explain.",WorkFromHome=false},
            new Job{JobField=JobField.Computers,JobTitle="embedded developer",ScopeOfHours=30,Area="Modiin Elit",Requirements="A software engineer's degree, big-headed ambition and a desire to advance.",WorkFromHome=true},
            new Job{JobField=JobField.Other,JobTitle="cleaner",ScopeOfHours=40,Area="Jerusalem",Requirements="Agility, responsibility and a high work ethic.",WorkFromHome=false},
        };
        [HttpGet("GetAllJobs")]
        public List<Job> GetAllJobs()
        {
            return jobs;
        }

    }
}
