import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.css']
})
export class ResultsDisplayComponent {

  ResultArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  

  constructor(private http: HttpClient )
  {
    this.getAllResults();
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

  setDelete(data: any)
  {
    this.http.delete("http://localhost:8085/api/result/delete"+ "/"+ data.ResultID).subscribe((resultData: any)=>
    {
      if(resultData.status){
        alert("Result Deleted")
        this.getAllResults();
      }
    });
  }
  }
  