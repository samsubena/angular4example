
import 'rxjs/add/operator/map';
 
import 'rxjs/add/operator/catch';
 
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
 
 
 
import { Employee } from './employee';

@Injectable()
export class ReferenceService {
/*departments = [];
  private apiURL = 'assets/service.json';
  constructor(private http:Http) {
   // this.getallemployeelist();
   //return http.get(this.apiURL).map((res:Response) => res.json());
    http.get('assets/mockservice.json')
      .map((res: Response) => res.json())
      .subscribe((departments: Array<any>) => this.departments = departments);
  }  */
  // getallemployeelist(){return this.http.get('http://localhost:4200/assets/service.json').map((res:Response =>res.json());
      
 
// Api Full path like, http://localhost:4200/assets/service.json
 

   // }


public extractData(res: Response) {
 
const body = res.json();
 
return body || {};  
 }
 
public handleError(error: any) { return Observable.throw(error); }

constructor(private http: Http) { }
 
getAllEmployees(): Observable< Employee[] > {
 
try {
 
return this.http.get('assets/mockservice.json').map(this.extractData).catch(this.handleError) ; 
 
}   catch (error) { console.log(error); }  }
 
}
