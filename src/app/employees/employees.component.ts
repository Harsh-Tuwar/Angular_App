import { Component, OnInit } from '@angular/core';
import { Employees } from '../data/Employees';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private employees: Employees[];
  private getEmployeesSub;
  private loadingError: boolean = false;
  filteredEmployees: Employees[];

  constructor(private e: EmployeesService, private router: Router) {  }

  ngOnInit() {
    // console.log("ngOnInit employees component ts");
    this.getEmployeesSub = this.e.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = data;
    },
      () => {
        this.loadingError = true;
      });
  }


  routeEmployee(id: string) {
    this.router.navigate(['employee', id]);
    // console.log("tr clicked");
   
  }

  onEmployeeSearchKeyUP(event: any) {
    let substring: string = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((em) =>
      ((em.FirstName.toLowerCase().indexOf(substring) != -1) ||
        (em.LastName.toLowerCase().indexOf(substring) != -1) ||
        (em.Position["PositionName"].toLowerCase().indexOf(substring) != -1)))

  }

  ngOnDestroy() {
    if (this.getEmployeesSub != 'undefined') {
      this.getEmployeesSub.unsubscribe();
    }
  }

}
