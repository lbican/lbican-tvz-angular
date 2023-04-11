import {Component, Input, OnInit} from '@angular/core';
import {StudentDTO} from "../models/studentDTO";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent implements OnInit{
  student: StudentDTO | undefined;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    const jmbag = this.route.snapshot.params['jmbag']
    this.studentService.getStudent(jmbag).subscribe((student) => {
      if(student){
        this.student = student;
      }
    })
  }

}
