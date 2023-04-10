import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "../student/student.component";
import { HomepageComponent } from "../homepage/homepage.component";
import { StudentDetailsComponent } from "../student-details/student-details.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'students', component: StudentComponent },
  { path: 'students/:jmbag', component: StudentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
