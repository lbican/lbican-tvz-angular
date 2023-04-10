import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Student} from "../models/student";
import {MOCK_STUDENTS} from "./mock-students";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]>{
    return of(MOCK_STUDENTS);
  }

  getStudent(jmbag: string): Observable<Student | undefined>{
    return of(MOCK_STUDENTS.find((st) => {
      return st.jmbag === jmbag;
    }))
  }
}
