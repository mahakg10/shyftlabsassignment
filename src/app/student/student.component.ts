import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { EmailValidator } from '@angular/forms';
// import { FormControl,FormGroup } from '@angular/forms';
// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

maxDate: string = "";
StudentArray : any[] = [];
isResultLoaded = false;
isUpdateFormActive = false;
// validateEmail = true;

FirstName: string="";
FamilyName: string="";
dob = new Date();
email: string="";
// email = new EmailValidator();

// UserEmail = new FormGroup({
// 	primaryEmail: new FormControl('',[
//   	Validators.required,
//   	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
//   });


//   get primEmail(){
//     return this.UserEmail.get('primaryEmail')
//     }

constructor(private http: HttpClient )
{
  var now = new Date();
  now.setFullYear(now.getFullYear() - 10);
  this.maxDate = now.toISOString().slice(0,10)
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

register()
{

  let bodyData = {

    "FirstName" : this.FirstName,
    "FamilyName": this.FamilyName,
    "dob" : this.dob,
    "email" : this.email,
    // "email" : this.UserEmail,
  };

  this.http.post("http://localhost:8085/api/student/add",bodyData).subscribe((resultData: any)=>
  {
    
      if(resultData.status){
     
      alert("Student Added Successfully")
      //  this.getAllStudents();
    }

  });
}


save()
{
  this.register();     
}

}
