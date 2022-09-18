import { Component } from '@angular/core';
import { Employee } from './models/employee' 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[]=[
    {id:1,name:"Ryan", country: "USA"},
    {id:2,name:"Angelica", country: "USA"},
    {id:3,name:"Joe", country: "USA"},
  ];
  
  selectedEmployee: Employee = new Employee();
  addOrEdit(){
    if (this.selectedEmployee.id===0) {
      this.selectedEmployee.id = this.employeeArray.length +1;
      this.employeeArray.push(this.selectedEmployee);
    }

    
    this.selectedEmployee = new Employee;
  }

  openForEdit(employee:Employee){
    this.selectedEmployee = employee;
    
  }

  delete(){
   if (confirm('Are you sure you want to delete it?  ')) {
    this.employeeArray = this.employeeArray.filter(x => x!= this.selectedEmployee);
    this.selectedEmployee= new Employee();
   }
  }

 
}
