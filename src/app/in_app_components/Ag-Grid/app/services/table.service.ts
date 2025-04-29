import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  tableDataUrl:string='http://localhost:3000/tabledata'
  constructor(private http:HttpClient) {}

  //to fetch the table data
   getTableData():Observable<any>{
    return this.http.get(this.tableDataUrl)
   }

   //to update the table data
   updateTableData(data:any){
     this.http.put(`${this.tableDataUrl}/${data.id}`,data).subscribe(
      data=>{console.log('data updated successfully');
      },
      err=>{
        console.log('error exist',err);
        
      }
     );
     
   }
}
