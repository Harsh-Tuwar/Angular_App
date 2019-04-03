import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from '../data/EmployeeRaw';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { PositionService } from '../position.service';
import { Position } from '../data/Positions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

   id:string;
   paramSubScription: any;
   employeeSubscription: any;
   getPositionsSub: any;
   saveEmployeeSubscription: any;
   employee: EmployeeRaw; 
   positions: Position[];
   successMessage = false;
   failMessage = false;

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private positionService: PositionService) {  
    
  }


  ngOnInit() {
    
    this.employee = new EmployeeRaw();
    this.paramSubScription = this.route.params.subscribe(params => this.id = params['_id'], err => console.log("unable to get id parameter"));
    this.employeeSubscription = this.employeeService.getEmployee(this.id).subscribe(employees => this.employee = employees[0], err => console.log("unable to get employee"));
    this.getPositionsSub = this.positionService.getPositions().subscribe(pos => this.positions = pos, err => console.log("unable to get positions"));
    
  }
  
  onSubmit() {
    this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe(() => {
      this.successMessage = true;

      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    },
      () => {
        this.failMessage = true;
        setTimeout(() => {
          this.failMessage = false;
        }, 2500);
      });
  }

  ngOnDestroy() {
    if (this.paramSubScription) { this.paramSubScription.unsubscribe(); }
    if (this.employeeSubscription) { this.employeeSubscription.unsubscribe(); }
    if (this.getPositionsSub) { this.getPositionsSub.unsubscribe(); }
    if (this.saveEmployeeSubscription) { this.saveEmployeeSubscription.unsubscribe(); }
  }

}
