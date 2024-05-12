import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  filterDetails: any = null

  ifParams:boolean=false

  constructor(private jobSvc: JobService, private _router: Router, private activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    let filter = { jobField: 'all', jobArea: null }
    this.activeRouter.params.subscribe(params => {
      if (params["field"]){
        this.ifParams=true
        filter.jobField = params["field"]
      }
      this.applyFilter(filter)
    })
  }

  filterChange($event: any) {
    if(this.ifParams)
      this._router.navigate(['jobs']);
    else
      this.applyFilter($event)
  }


  applyFilter($event: any) {
    this.filterDetails = $event
    this.jobs = this.jobSvc.filterJob(this.filterDetails.jobField, this.filterDetails.jobArea);
  }


}
