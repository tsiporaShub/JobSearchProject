import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { JobField } from '../../models/job_field.model';
import { CvService } from '../../services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private CvSvc: CvService, private _router: Router) {
    if (!localStorage.getItem('userDetails'))
      this._router.navigate(['/login']);
  }

  showCVs: boolean = false

  getUser() {
    return JSON.parse(localStorage.getItem('userDetails')!);
  }

  getField(i: any) {
    return Object.keys(JobField).filter((v) => isNaN(Number(v)))[Number(i)];
  }

  showCVsSentList() {
    this.showCVs = !this.showCVs
  }

  getCVsSentList() {
    return this.CvSvc.getCVsSentList();
  }

  getCountOfCVs() {
    return this.CvSvc.getCountOfCVs();
  }
}
