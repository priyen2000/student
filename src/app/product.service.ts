import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product1 } from './product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string='http://localhost:3000/product/';
  constructor(private _http:HttpClient) { }
  getAllProduct(){
    return this._http.get(this.url);
    }
    getallProductbyid(id:number){
      return this._http.get(this.url+id);
    }
    AddProduct(item:product1)
    {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
    }
    DeleteProduct(item:product1)
    {
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.id,{headers:head1});
    }
    updateProduct(item:product1)
    {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.id,body,{headers:head1});
    }
}
