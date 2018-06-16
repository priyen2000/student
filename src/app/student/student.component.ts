import { Component, OnInit } from '@angular/core';
import { student1 } from './student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

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
 arr:student1[]=[];
i:number;
  constructor(private _xyz:StudentService,private _route:Router) { }
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
        this._xyz.getAddStudent(new student1(this.id,this.name,this.mobno,this.gender,this.totm,this.x)).subscribe(
          (data:any)=>{
            this.arr.push(new student1(this.id,this.name,this.mobno,this.gender,this.totm,this.x));

          }
        );
         }

      oncancel()
      {
        this.flag=false;
      }
    ondelete(item)
    {
      this._xyz.deleteStudent(item).subscribe(
        (data:any)=>{
          this.arr.splice(this.arr.indexOf(item),1);

        }
      );
       }
       onupdate(item:student1)
       {
         this._route.navigate(['/editstudent',item.id]);
       }
  ngOnInit() {
    this._xyz.getAllStudent().subscribe(
      (data:student1[])=>{
        this.arr=data;
        console.log(this.arr);
      }
  );
}
}
