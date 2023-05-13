import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-students-display',
  templateUrl: './students-display.component.html',
  styleUrls: ['./students-display.component.css']
})
export class StudentsDisplayComponent {

  StudentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  
  constructor(private http: HttpClient )
  {
    this.getAllStudents();
  }
  
  ngOnInit(): void {
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
  
  setDelete(data: any)
  {
    console.log(data)
    this.http.delete("http://localhost:8085/api/student/delete"+ "/"+ data.StudentID).subscribe((resultData: any)=>
    {
      if(resultData.status){  
        alert("Student Deleted")
        this.getAllStudents();
      }
    });
  }
  }
  