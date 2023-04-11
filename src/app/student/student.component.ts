import {Component, OnInit} from '@angular/core';
import {StudentDTO} from "../models/studentDTO";
import {StudentService} from "../services/student.service";
import {catchError, lastValueFrom, tap, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit{
  errorMessage: string | null = null;
  students?: StudentDTO[];
  selectedStudent?: StudentDTO;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents().catch((error) => console.error(error));
  }

  onSubmit(firstName: string, lastName: string, jmbag: string, ects: string) {
    this.studentService.addStudent(firstName, lastName, jmbag, Number(ects))
      .pipe(
        tap(response => console.log(response)),
        catchError(error => {
          console.log(error);
          const httpError = error as HttpErrorResponse;
          this.errorMessage = `Failed to add student: ${httpError.error.errors.toString()}`;
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        this.getStudents().catch((error) => console.error(error));
      });
  }

  onDelete(jmbag: string){
    console.log(jmbag);
  }

  async getStudents(): Promise<void> {
    try {
      this.students = await lastValueFrom(this.studentService.getStudents());
    } catch (error: any) {
      console.log(error);
    }
  }

  onSelect(student: StudentDTO): void {
    this.selectedStudent = student;
  }

}
