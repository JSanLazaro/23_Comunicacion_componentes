import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Employee } from 'src/model/Employee.model';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent {
  fName:string = "";
  fLastName:string = "";
  fPosition:string ="";
  fSalary:number = 0;
  employees:Employee[] = [];
  constructor(private sharedService:SharedService){
    this.employees = sharedService.getEmployeeArray();
  }
  addEmployee(){
    let employee = new Employee(this.fName,this.fLastName,this.fPosition,this.fSalary)
    this.sharedService.pushEmployee(employee);
  }
}
