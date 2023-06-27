import { Injectable } from '@angular/core';
import  { Employee } from 'src/model/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  employees:Employee[] = [];

  constructor() { }
  pushEmployee(employee:Employee){
    this.employees.push(employee);
  }
  getEmployeeArray():Employee[]{
    return this.employees;
  }

}
