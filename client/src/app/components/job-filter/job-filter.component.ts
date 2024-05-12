import { Component, EventEmitter, Output } from '@angular/core';
import { JobField } from '../../models/job_field.model';


@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrl: './job-filter.component.scss'
})
export class JobFilterComponent {
  jobField: JobField | string = "all"
  jobArea: string | null = null

  getFields() {
    return Object.keys(JobField).filter((v) => isNaN(Number(v)));
  }

  onSelected(value: any) {
    this.jobField = value
  }

  @Output('filterChange') filterChange: EventEmitter<any> = new EventEmitter<any>()

  filter() {
    this.filterChange.emit({ jobField: this.jobField, jobArea: this.jobArea });
  }
}
