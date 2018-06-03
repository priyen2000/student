import { Component, OnInit } from '@angular/core';
import { task } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
arr:task[]=[
  new task(1,'going to play','pending'),
  new task(2,'email to manager','pending'),
  new task(3,'call to raj','done')
]
  constructor() { }
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
  ngOnInit() {
  }

}
