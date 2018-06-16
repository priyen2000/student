import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { task } from './todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private url:string='http://localhost:3000/todo/';
  constructor(private _http:HttpClient) { }
  getAllTask(){
    return this._http.get(this.url);
  }
  getAddTask(item:task)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  getalltaskbyid(id:number){
    return this._http.get(this.url+id);
  }
  deleteTask(item:task)
  {
    let header1=new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.url+item.id,{headers:header1});
  }
  updateTask(item:task)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.id,body,{headers:head1});
  }
}
