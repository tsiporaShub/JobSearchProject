import { JobField } from "./job_field.model"

export interface Job {
    jobField: JobField
    jobTitle: string
    scopeOfHours: number
    area: string
    requirements: string
    workFromHome: boolean
}