import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobField } from '../models/job_field.model';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  jobs: Job[] = [];

  getJobsFromServer() {
    return this.http.get('https://localhost:44337/api/Job/GetAllJobs')
  }

  filterJob(field: JobField | string, area: string | null) {
    console.log("dd"+field);
    
    this.jobs = [];
    this.getJobsFromServer().subscribe((res: any) => {
      res.map((j: any) => {
        if ((field == 'all' || j.jobField == field) &&
          (area == null || area == '' || j.area == area))
          this.jobs.push(j)
      })
    })

    console.log(this.jobs);
    return this.jobs;
  }

}
