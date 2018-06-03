import { Component, OnInit } from '@angular/core';
import { product1 } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
i:number=0;
x:number;
y:string='../assets/IMG_20171224_155204.jpg';
id:number;
name:string;
price:number;
img:string;
mfg:string;
soh:number;
  arr:product1[]=[
  new product1(1,'laptop',45000,'','lenovo',30),
  new product1(2,'mobile',15000,'','mi',40)
]
ondelete()
{
  this.arr.splice(this.i,1);
}
onupdate(x)
{
  this.arr[x].soh=parseInt(prompt('please enter stock on hand to update'));
}
onadd()
{
  this.arr.push(new product1(this.id,this.name,this.price,this.img,this.mfg,this.soh));
}
  constructor() { }

  ngOnInit() {
  }

}
