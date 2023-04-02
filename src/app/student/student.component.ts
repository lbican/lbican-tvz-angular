import {Component, OnInit} from '@angular/core';
import {Student} from "../models/student";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit{

  students?: Student[];
  selectedStudent?: Student;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void{
    this.studentService.getStudents().subscribe(
      (students) => {
        this.students = students;
      }
    )
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

}
