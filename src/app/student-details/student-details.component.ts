import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../models/student";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent implements OnInit{

  @Input() student?: Student;

  ngOnInit(): void {
    // TODO Implement on init
  }

}
