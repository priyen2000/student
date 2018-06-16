import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../product.service';
import { product1 } from '../product/product';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
x:number;
y:string='../../assets/p1.jpg.jpg';
id:number;
name:string;
price:number;
mfg:string;
soh:number;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _data:ProductService) { }
  onupdate(){
    this._data.updateProduct(new product1(this.id,this.name,this.price,this.y,this.mfg,this.soh)).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['']);
      }
     );
  }
  ngOnInit() {
this.x=this._acroute.snapshot.params['id'];
this._data.getallProductbyid(this.x).subscribe(
  (data:product1[])=>{
    this.id=data[0].id;
    this.name=data[0].name;
    this.price=data[0].price;
    this.y=data[0].img;
    this.mfg=data[0].mfg;
    this.soh=data[0].soh;
  }
);
  }

}
