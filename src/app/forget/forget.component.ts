import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { sign } from '../signup/signup';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
x:string;
y:string;
email_id:string;
  constructor(private _data:SignupService,private _route:Router,private _acroute:ActivatedRoute) { }
onsave(){
// this.x=this._acroute.snapshot.params['id'];
this._data.getUserById(this.email_id).subscribe(
  (data:sign[])=>{

    if(data.length>0)
        {
          this.x=data[0].email_id;
          this.y=data[0].password;
        }
        else{
            alert("The Email_Id Or the Password is wrong")
        }
  }
);
}
oncancle(){
  this._route.navigate(['/login']);
}
  ngOnInit() {
  }

}
