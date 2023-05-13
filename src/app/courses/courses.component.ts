import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


CourseArray : any[] = [];
isResultLoaded = false;
isUpdateFormActive = false;

CourseName: string ="";

constructor(private http: HttpClient )
{
  this.getAllCourses();
}

ngOnInit(): void {
}

getAllCourses()
{
  this.http.get("http://localhost:8085/api/course/")
  .subscribe((resultData: any)=>
  {
      this.isResultLoaded = true;
      console.log(resultData.data);
      this.CourseArray = resultData.data;
  });
}


register()
{
  let bodyData = {
    "Course" : this.CourseName,
  };

  this.http.post("http://localhost:8085/api/course/add",bodyData).subscribe((resultData: any)=>
  {
    if(resultData.status){
      alert("Course Registered Successfully")
      // this.getAllCourses();
    }
  });
}


save()
{
      this.register(); 
}

}

