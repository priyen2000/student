import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SignupService } from "../signup.service";
import { sign } from "../signup/signup";
import { log } from "../login/login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email_id: string;
  password: string;
  constructor(
    private _route: Router,
    private _acroute: ActivatedRoute,
    private _data: SignupService
  ) {}
  onlogin() {
    this._data
      .getallUserById(new log(this.email_id, this.password))
      .subscribe((data: any) => {
        console.log(data);
        if(data.length>0)
        {
          this._route.navigate(["/view", this.email_id]);
        }
        else{
            alert("The Email_Id Or the Password is wrong")
        }
      });

  }
  onforget(){
    this._route.navigate(['forget']);
  }
  onsignup() {
    this._route.navigate(["sign"]);
  }
  ngOnInit() {}
}
