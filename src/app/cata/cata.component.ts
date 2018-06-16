import { Component, OnInit } from '@angular/core';
import { catagoery } from './catag';
import { CataService } from '../cata.service';

@Component({
  selector: 'app-cata',
  templateUrl: './cata.component.html',
  styleUrls: ['./cata.component.css']
})
export class CataComponent implements OnInit {
arr:catagoery[]=[];
id:number;
name:string;
is:string;
flag:boolean=false;
p:string;
  constructor(private _xyz:CataService) { }
  ondelete(i)
{
  this._xyz.deleteCata(i).subscribe(
    (data:any)=>{
      this.arr.splice(this.arr.indexOf(i),1);
console.log(data);
    }
  );
}
onupdate(p)
{
  this.arr[p].cat_name = prompt('enter catagoery to change');
}
  onclickAdd()
  {
    //console.log('aama aayu');
    this._xyz.getAddCata(new catagoery(this.id,this.name,this.is)).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr.push(new catagoery(this.id,this.name,this.is));

      }
    );
  }
  ngOnInit() {
    this._xyz.getAllCata().subscribe(
      (data:catagoery[])=>{
        this.arr=data;
        console.log(data);
      }
  );
  }

}
