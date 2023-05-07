import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Student, StudentDTO} from "../models/student";
import { environment } from "../../environments/env.dev";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {CourseDTO} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<StudentDTO[]>{
    return this.httpClient.get<StudentDTO[]>(`${this.apiUrl}/student`);
  }

  getRandomDate = (): string => {
    const currentDate = new Date();
    const randomYear = currentDate.getFullYear() - Math.floor(Math.random() * 3 + 19); // Generate a random year between 19 and 21 years ago
    const randomMonth = Math.floor(Math.random() * 12); // Generate a random month between 0 and 11
    const randomDay = Math.floor(Math.random() * 31); // Generate a random day between 0 and 30
    return new Date(randomYear, randomMonth, randomDay).toISOString().slice(0, 10);
  };

  getStudent(jmbag: string): Observable<StudentDTO | undefined>{
    return this.httpClient.get<StudentDTO>(`${this.apiUrl}/student/${jmbag}`);
  }

  getStudentCourses(jmbag: string): Observable<CourseDTO[] | undefined>{
    return this.httpClient.get<CourseDTO[]>(`${this.apiUrl}/course/${jmbag}`);
  }

  deleteStudent(jmbag: string): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/student/${jmbag}`);
  }

  addStudent(firstName: string, lastName: string, jmbag: string, ects: number) {

    const student: Student = {
      firstName,
      lastName,
      dateOfBirth: new DatePipe('en-US').transform(this.getRandomDate(), 'dd.MM.yyyy.'),
      jmbag,
      numberOfECTS: ects
    };

    return this.httpClient.post<any>(`${this.apiUrl}/student`, student);
  }
}
