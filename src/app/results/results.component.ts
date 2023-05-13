import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  ResultArray : any[] = [];
  StudentArray : any[] = [];
  CourseArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  
  FirstName: string="";
  FamilyName: string="";
  FullName: string="";
  CourseName: string ="";
  Score: string ="";
  
  constructor(private http: HttpClient )
  {
    this.getAllResults();
    this.getAllStudents();
    this.getAllCourses();
  }
  
  ngOnInit(): void {
  }
  
  getAllResults()
  {
    this.http.get("http://localhost:8085/api/result/")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.ResultArray = resultData.data;
        
    });
  }
  
  getAllStudents()
{
  this.http.get("http://localhost:8085/api/student/")
  .subscribe((resultData: any)=>
  {
      this.isResultLoaded = true;
      console.log(resultData.data);
      this.StudentArray = resultData.data;
  });
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
  
      "FirstName" : this.FirstName,
      "FamilyName": this.FamilyName,
      "Course" : this.CourseName,
      "Result" : this.Score,
    };
  
    this.http.post("http://localhost:8085/api/result/add",bodyData).subscribe((resultData: any)=>
    {
      if(resultData.status){
        alert("Student Result Added Successfully")
        // this.getAllResults();
      }
    });
  }
  
  save()
  {
        this.register();
  }
  
  
  }
  
