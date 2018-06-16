import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { emp } from './employee/emp';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string='http://localhost:3000/emp/';
  constructor(private _http:HttpClient) { }
  getAllEmp(){
  return this._http.get(this.url);
  }
  getallEmpById(id:number){
    return this._http.get(this.url+id);
  }
  getAddEmployee(item:emp)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteEmployee(item:emp)
  {
    let header1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.id,{headers:header1});
  }

  updateemployee(item:emp)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.id,body,{headers:head1});
  }
}
