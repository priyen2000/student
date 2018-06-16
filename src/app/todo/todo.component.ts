import { Component, OnInit } from '@angular/core';
import { task } from './todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
arr:task[]=[];
flag:boolean=false;
id:number;
name:string;
status:string;
  constructor(private _xyz:TodoService,private _route:Router) { }
onchange(item:task)
{
  if(item.status=='pending')
  {
    item.status='done';
  }
  else
  {
    item.status='pending';
  }
}
onadd()
  {
      if (this.flag) {
        this.flag=false;
      } else {
        this.flag=true;
      }
      }
      onadd1()
      {
        this._xyz.getAddTask(new task(this.id,this.name,this.status)).subscribe(
          (data:any)=>{
            this.arr.push(new task(this.id,this.name,this.status));

          }
        );
         }
      oncancle()
      {
        this.flag=false;
      }
      onupdate(item:task){
        this._route.navigate(['/edittodo',item.id]);
      }
      ondelete(item)
      {
        this._xyz.deleteTask(item).subscribe(
          (data:any)=>{
            this.arr.splice(this.arr.indexOf(item),1);

          }
        );
         }
  ngOnInit() {

    this._xyz.getAllTask().subscribe(
      (data:task[])=>{
        this.arr=data;
        console.log();
      }
    );
  }
}

