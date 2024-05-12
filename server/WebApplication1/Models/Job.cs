namespace API.Models
{
    public class Job
    {
        public JobField JobField { get; set; }
        public string JobTitle { get; set; }
        public int ScopeOfHours { get; set; }
        public string Area { get; set; }
        public string Requirements { get; set; }
        public bool WorkFromHome { get; set; }
    }

    public enum JobField { Teaching, Computers, Other}
}
