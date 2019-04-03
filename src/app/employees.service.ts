import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from './data/Employees';
import { EmployeeRaw } from './data/EmployeeRaw';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>('http://app-web422.herokuapp.com/employees');
  }

  saveEmployee(employee: EmployeeRaw): Observable<any>{
    return this.http.put<any>('http://app-web422.herokuapp.com/employee/' + employee._id, employee);
  }

  getEmployee(id): Observable<EmployeeRaw[]>{
    // console.log("gand ma bhadako" + id);

    return this.http.get<EmployeeRaw[]>("http://app-web422.herokuapp.com/employee-raw/" + id); 
  }
}
