import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { ResultsComponent } from './results/results.component';
import { ResultsDisplayComponent } from './results-display/results-display.component';
import { CoursesDisplayComponent } from './courses-display/courses-display.component';
import { StudentsDisplayComponent } from './students-display/students-display.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'AddStudent-component', component: StudentComponent }, 
  { path: 'ListStudents-component', component: StudentsDisplayComponent },
  { path: 'AddCourse-component', component: CoursesComponent },
  { path: 'ListCourses-component', component: CoursesDisplayComponent },
  { path: 'AddResults-component', component: ResultsComponent },
  { path: 'ListResults-component', component: ResultsDisplayComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CoursesComponent,
    ResultsComponent,
    ResultsDisplayComponent,
    CoursesDisplayComponent,
    StudentsDisplayComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
