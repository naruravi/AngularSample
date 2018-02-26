import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService {
  private headers: Headers;
  constructor(private _http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Types", "application/json");
  }
  private baseUrl: string = "http://localhost:8085/api/Employee";
  getEmployeeList(): Observable<Employee[]> {
    return this._http.get(this.baseUrl + "/GetEmployees").map(res => res.json());
  }

  getEmployeeDetails(): Observable<Employee> {
    return this._http.get(this.baseUrl + "/GetEmployee/3").map(res => res.json());
  }
}