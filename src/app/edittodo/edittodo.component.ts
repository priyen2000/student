import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { task } from '../todo/todo';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
id:number;
name:string;
status:string;
x:number;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _data:TodoService) { }
onsave(){
  this._data.updateTask(new task(this.id,this.name,this.status)).subscribe(
    (data:any)=>{
      console.log(data);
      this._route.navigate(['']);
    }
   );
}
  ngOnInit() {
    this.x=this._acroute.snapshot.params['id'];
    this._data.getalltaskbyid(this.x).subscribe(
      (data:task[])=>{
        this.id=data[0].id;
        this.name=data[0].name;
        this.status=data[0].status;
      }
    );
  }

}
