import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { sign } from '../signup/signup';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  x:string;
  email_id:string;
  user_name:string;
  password:string;
  mobile_no:string;
  city:string;
  gender:string;
  address:string;

  constructor(private data:SignupService,private _route:Router,private _acroute:ActivatedRoute) { }
onsave(){
  this.data.UpdateUser(new sign(this.email_id,this.user_name,this.password,this.mobile_no,this.city,this.gender,this.address)).subscribe(
    (data:any)=>{
      console.log(data);
      this._route.navigate(['/view',this.email_id]);
    }
   );
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


