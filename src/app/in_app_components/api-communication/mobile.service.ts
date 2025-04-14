import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Mobile{
  name:string;
  RAM:string;
  ROM:string;
  Price:string;
  id:string;
}

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private jsonUrl="http://localhost:4444/mobiles"
  constructor(private http:HttpClient) { }

  fetchMobiles():Observable<Mobile[]>{
    return this.http.get<Mobile[]>(this.jsonUrl)
  }

  deleteMobile(id:any){
    return this.http.delete(this.jsonUrl+'/'+id)
  }

  updateMobile(data:any){
    return this.http.put(`${this.jsonUrl}/${data.id}`, data);
  }

  addMobile(data:Object){
    return this.http.post(this.jsonUrl,data)
  }
}
