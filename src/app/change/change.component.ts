import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { sign } from '../signup/signup';
import { log } from '../login/login';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
email_id:string;
password:string;
newp:string;
conp:string;
user_name:string;
mobile_no:string;
city:string;
gender:string;
address:string;
  constructor(private _data:SignupService,private _route:Router,private _acroute:ActivatedRoute) { }
onsave(){
  this._data.getallUserById(new log(this.email_id,this.password)).subscribe(
    (data:sign[])=>{
      console.log(data);
      if(data.length>0){
        if(this.newp==this.conp)
        {
          this.email_id=data[0].email_id;
          this.user_name=data[0].user_name;
          this.mobile_no=data[0].mobile_no;
          this.city=data[0].city;
          this.gender=data[0].gender;
          this.address=data[0].address;
          this._data.UpdateUser(new sign(this.email_id,this.user_name,this.newp,this.mobile_no,this.city,this.gender,this.address)).subscribe(
            (data:any)=>
            {
              console.log(this.newp);
            }
          );
          alert("Update succesfully");
          this._route.navigate(['/login']);
        }
        else
        {
          alert("Password Missmatch");
        }
      }
      else
      {
        alert("Id & Old password is wrong");
      }
    }
   );
}
  ngOnInit() {
  }

}
