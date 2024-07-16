import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormBuilder,
} from '@angular/forms';
// import data from '../../../assets/sampleData/landing-component.json';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'students-records-app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  filter: FormControl;
  students!: Array<any>;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService
  ) {
    this.filter = this.fb.control('', { nonNullable: true });
  }

  ngOnInit(): void {
    this.dashboardService.callGetStudentsRecords().subscribe((res: any) => {
      console.log("response02: ", res)
      this.students = res;
    });
  }
}
