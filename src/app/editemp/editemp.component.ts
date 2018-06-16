import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { emp } from '../employee/emp';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
x:number;
id:number;
name:string;
gender:string;
h1:string;
city:string;
img:string;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _data:EmployeeService) { }
  onsave(){
    this._data.updateemployee(new emp(this.id,this.name,this.img,this.city,this.h1,this.gender)).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['']);
      }
     );
  }
  ngOnInit() {
    this.x=this._acroute.snapshot.params['id'];
    this._data.getallEmpById(this.x).subscribe(
      (data:emp[])=>{
        this.id=data[0].id;
        this.name=data[0].name;
        this.img=data[0].img;
        this.gender=data[0].gender;
        this.h1=data[0].hobby;
        this.city=data[0].city;
      }
    );
  }

}
