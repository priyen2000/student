import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { sign } from './signup/signup';
import { log } from './login/login';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
private url:string='http://localhost:3000/sign/';
  constructor(private _http:HttpClient) { }
  getAllUser(){
    return this._http.get(this.url);
    }
    getUserById(id){
    return this._http.get(this.url+id);
      }
    getallUserById(item:log){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+item.email_id,body,{headers:head1});
    }
    getAddUser(item:sign)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  UpdateUser(item:sign)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.email_id,body,{headers:head1});
  }

}
