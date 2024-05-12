import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor() { }

  CVsSentList: Job[] = [];

  getCVsSentList() {
    return this.CVsSentList;
  }

  addCVToList(job: Job) {
    this.CVsSentList.push(job);
  }

  getCountOfCVs() {
    return this.CVsSentList.length;
  }

}
