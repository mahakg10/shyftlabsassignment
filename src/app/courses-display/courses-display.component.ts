import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses-display',
  templateUrl: './courses-display.component.html',
  styleUrls: ['./courses-display.component.css']
})
export class CoursesDisplayComponent {

  CourseArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  

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
  
  
  setDelete(data: any)
  {
    this.http.delete("http://localhost:8085/api/course/delete"+ "/"+ data.CourseID).subscribe((resultData: any)=>
    {
      if(resultData.status){
        alert("Course Deleted")
        this.getAllCourses();
      }
    });
  }
  }
