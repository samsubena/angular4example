import { Injectable } from '@angular/core';

@Injectable()
export class MockdataService {

// Create array
  hobbies = [
    'dancing',
    'singing',
    'internet'
  ];

  constructor() { }

   MockdataServiceData() {
     return "my first angular 4 application";
    }

}
