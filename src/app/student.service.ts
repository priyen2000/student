import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { student1 } from './student/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url:string='http://localhost:3000/student/';
  constructor(private _http:HttpClient) { }
  getAllStudent(){
    return this._http.get(this.url);
    }
    getallStudentById(id:number){
      return this._http.get(this.url+id);
    }
    getAddStudent(item:student1)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteStudent(item:student1)
  {
    let header1=new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.url+item.id,{headers:header1});
  }
  updateStudent(item:student1)
    {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.id,body,{headers:head1});
    }
}
