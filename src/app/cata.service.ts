import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catagoery } from './cata/catag';
@Injectable({
  providedIn: 'root'
})
export class CataService {
  private url:string='http://localhost:3000/cata/';
  constructor(private _http:HttpClient) { }

getAllCata(){
  return this._http.get(this.url);
  }
  getAddCata(item:catagoery)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteCata(item:catagoery)
  {
    let header1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.cat_id,{headers:header1});
  }

}
