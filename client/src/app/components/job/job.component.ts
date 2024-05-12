import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';
import { JobField } from '../../models/job_field.model';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  constructor(private CvSvc: CvService) {
  }

  @Input() jobDetails: Job | null = null;

  showDetails: boolean = false;

  changeShowDetails() {
    this.showDetails = !this.showDetails;
  }

  getField(i: any) {
    return Object.keys(JobField).filter((v) => isNaN(Number(v)))[Number(i)];
  }

  sendCV() {
    console.log("send cv");
    console.log(this.CvSvc.getCVsSentList());
    this.CvSvc.addCVToList(this.jobDetails!);
  }
}
