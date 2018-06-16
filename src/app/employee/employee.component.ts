import { Component, OnInit } from '@angular/core';
import { emp } from './emp';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
x:string='../../assets/p1.jpg.jpg';
y:string='../../assets/pr.jpg.JPG';
z:string='../../assets/group.jpg.JPG';
i:number;
p:string;
flag:boolean=false;
arr:emp[]=[];
id:number;
name:string;
img:string;
gender:string='male';
h1:string;
city:string;

  constructor(private _xyz:EmployeeService,private _route:Router) { }
ondel(i)
{
  this._xyz.deleteEmployee(i).subscribe(
    (data:any)=>{
      this.arr.splice(this.arr.indexOf(i),1);

    }
  );
}
onupdate(item:emp)
{
  this._route.navigate(['/editemp',item.id]);
}
onadd()
{
  if (this.flag) {
    this.flag=false;
  } else {
    this.flag=true;
  }
}
onclickAdd()
{
  console.log('aama aayu');
  this._xyz.getAddEmployee(new emp(this.id,this.name,this.x,this.city,this.h1,this.gender)).subscribe(
    (data:any)=>{
      console.log(data);
      this.arr.push(new emp(this.id,this.name,this.x,this.city,this.h1,this.gender));

    }
  );
}
  ngOnInit() {
this._xyz.getAllEmp().subscribe(
    (data:emp[])=>{
      this.arr=data;
      console.log(this.arr);
    }
);
}
}


