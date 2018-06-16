import { Component, OnInit } from '@angular/core';
import { sign } from '../signup/signup';
import { SignupService } from '../signup.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
arr:sign[]=[];
x:string;
email_id:string;
user_name:string;
password:string;
mobile_no:string;
city:string;
gender:string;
address:string;
  constructor(private data:SignupService,private _route:Router,private _acroute:ActivatedRoute) { }
onlogin(){
this._route.navigate(['login']);
}
onedit(item ){
this._route.navigate(['/edit',item.email_id]);
  }
  onchange(){
    this._route.navigate(['change']);
  }
  ngOnInit() {
    this.x=this._acroute.snapshot.params['id'];
    this.data.getUserById(this.x).subscribe(
      (data:sign[])=>{
        this.email_id=data[0].email_id;
        this.user_name=data[0].user_name;
        this.password=data[0].password;
        this.mobile_no=data[0].mobile_no;
        this.city=data[0].city;
        this.gender=data[0].gender;
        this.address=data[0].address;
        console.log(data);
      }
  );
  }
  }


