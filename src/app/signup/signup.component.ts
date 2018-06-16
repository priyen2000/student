import { Component, OnInit } from '@angular/core';
import { sign } from './signup';
import { SignupService } from '../signup.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
arr:sign[]=[];
email_id:string;
user_name:string;
password:string;
mobile_no:string;
city:string;
gender:string;
address:string;
  constructor(private _sign:SignupService,private _route:Router,private _acroute:ActivatedRoute) { }
onsignup(){
  this._sign.getAddUser(new sign(this.email_id,this.user_name,this.password,this.mobile_no,this.city,this.gender,this.address)).subscribe(
    (data:any)=>{
      this.arr.push(new sign(this.email_id,this.user_name,this.password,this.mobile_no,this.city,this.gender,this.address));

    }
  );
}
onlogin(){
this._route.navigate(['/login']);
}
  ngOnInit() {
    this._sign.getAllUser().subscribe(
      (data:sign[])=>{
        this.arr=data;
        console.log(this.arr);
      }
  );
}
  }


