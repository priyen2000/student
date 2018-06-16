import { Component, OnInit } from '@angular/core';
import { product1 } from './product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
i:number=0;
x:number;
y:string='../../assets/p1.jpg.jpg';
id:number;
name:string;
price:number;
mfg:string;
soh:number;
  arr:product1[]=[];
ondelete(i)
{
 this._xyz.DeleteProduct(i).subscribe(
   (data:any)=>{
    this.arr.splice(this.arr.indexOf(i),1);
   }
 );
}
onupdate(item:product1)
{
  this._route.navigate(['/editproduct',item.id]);
}
onadd()
{
  this._xyz.AddProduct(new product1(this.id,this.name,this.price,this.y,this.mfg,this.soh)).subscribe(
    (data:any)=>{
      this.arr.push(new product1(this.id,this.name,this.price,this.y,this.mfg,this.soh));
    }
  );
  // this.arr.push(new product1(this.id,this.name,this.price,this.y,this.mfg,this.soh));
}
  constructor(private _xyz:ProductService,private _route:Router) { }

  ngOnInit() {
    this._xyz.getAllProduct().subscribe(
      (data:product1[])=>{
        this.arr=data;
        console.log(this.arr);
      }
  );
  }
  }

