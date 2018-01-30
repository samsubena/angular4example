import { Component } from '@angular/core';
import { MockdataService } from './mockdata.service';
import { ReferenceService } from './reference.service';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Samsudee welcome to Angular 4';
  item = [];
  refDatafull =[];
  dataString;

  constructor(mockdata:MockdataService,refData:ReferenceService) {
    this.item = mockdata.hobbies;
    this.dataString = mockdata.MockdataServiceData();
    
    refData.getAllEmployees().subscribe((result: Employee[]) => {
 
      console.log('the employess data:' + result);
      this.refDatafull = result; 
    });
   
   }
}
