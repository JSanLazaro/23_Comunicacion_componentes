import { Component, Input } from '@angular/core';
import { Employee } from 'src/model/Employee.model';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent {
  @Input() employee!:Employee;
}
