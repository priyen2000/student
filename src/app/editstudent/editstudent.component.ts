import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { StudentService } from '../student.service';
import { student1 } from '../student/student';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
id:number;
name:string;
mobno:number;
gender:string;
totm:number;
res:string;
x:number;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _data:StudentService) { }
  onsave(){
    this._data.updateStudent(new student1(this.id,this.name,this.mobno,this.gender,this.totm,this.res)).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['']);
      }
     );
  }
  ngOnInit() {
    this.x=this._acroute.snapshot.params['id'];
    this._data.getallStudentById(this.x).subscribe(
      (data:student1[])=>{
        this.id=data[0].id;
        this.name=data[0].name;
        this.mobno=data[0].mobno;
        this.gender=data[0].gender;
        this.totm=data[0].totmarks;
      }
    );

  }

}
