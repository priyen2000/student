import { Component, OnInit } from '@angular/core';
import { student1 } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
id:number;
name:string;
mobno:number;
gender:string='male';
totm:number;
res:string;
flag:boolean=false;
x:string;
 arr:student1[]=[
  new student1(1,'priyen',9624062317,'male',70,'pass'),
  new student1(2,'raj',7984689678,'male',80,'pass')
]
i:number;
  constructor() { }
onadd()
  {
      if(this.totm>35)
      {
        this.x='pass';
      }
      else
      {
        this.x='fail';
      }
      if (this.flag) {
        this.flag=false;
      } else {
        this.flag=true;
      }
      }
      onadd1()
      {
        this.arr.push(new student1(this.id,this.name,this.mobno,this.gender,this.totm,this.x));
      }
      oncancle()
      {
        this.flag=false;
      }
    ondelete(i)
    {
      this.arr.splice(i,1);
    }
    onupdate(x)
    {
      this.arr[x].mobno=parseInt(prompt('please enter mobno to update'));
    }
  ngOnInit() {
  }

}
