import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "../models/employee.model";
import { EmployeeService } from "../services/employee.service";
@Component({
    selector: 'app-employeelist',
    templateUrl: '../views/employees-list.component.html',
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    @Input("EmployeeId") id: number;
    title: string = "Employee Details";
    EmployeeDetails: Employee;
    constructor(private employeeService: EmployeeService) {
    }
    ngOnInit() {
        this.employeeService.getEmployeeDetails().subscribe(
            (data) => this.EmployeeDetails = data
        );
    }


}