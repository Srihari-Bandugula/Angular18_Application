import { Component } from '@angular/core';
import {AgGridAngular, ICellEditorRendererAngularComp, ICellRendererAngularComp} from 'ag-grid-angular'
import {AllCommunityModule, ColDef, ICellEditorRendererParams, ICellRendererParams, ModuleRegistry} from 'ag-grid-community'
import { TableService } from './services/table.service';
import { filter } from 'rxjs';
 
ModuleRegistry.registerModules([AllCommunityModule]) //to specify (register) we are using AG_GRID community module
//declaring the Table properties
interface Table{
  id:number;
  name:string;
  age:number;
  department:string;
  joiningDate:string;
  mobile:string
}
@Component({
  selector: 'app-root',
  imports: [AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ag-grid-app';
  rowData!:[];
  rowSelection:'single'|'multiple'='multiple' //specifying rowSelection Type
  constructor(private service:TableService){
    service.getTableData().subscribe(data=>this.rowData=data); //initializing rowData from TableService
  }
  //Column Definitions
  columnData:ColDef<Table>[]=[
    {field:'id',headerName:"ID"},
    {field:"name",headerName:"NAME"},
    {field:"age",headerName:"AGE"},
    {field:"department",headerName:"DEPARTMENT"},
    {field:"joiningDate",headerName:"JOINING-DATE"},
    {field:"mobile",headerName:"MOBILE"},
    {
      headerName:'Send Reminder',cellRenderer:CustomButtonComponent,filter:false,editable:false // reminder button
    }
  ]

  //Pagination
  pagination:boolean=true;
  paginationPageSize:number=50;
  paginationPageSizeSelector:number[]=[30,60,90,120,150,180]

  //default column configurations (applicable for all def)
  defaultColDef={
    editable:true,
    filter:true,
    floatingFilter:true
  }
  //when a cell is edited the data received to this method and then the DB also changes
  onCellValueChanged(event: any) {
    const updatedData = event.data;
    this.service.updateTableData(updatedData)
  }

}


//Custom Component (Button)
@Component({
  template:`<button (click)='onButtonClick()' style="background-color: blue;color:white;border:none;border-radius:3px;cursor:pointer">Remind</button>`
})
class CustomButtonComponent implements ICellRendererAngularComp{

  params:any;
  constructor(private serv:TableService){}

  refresh(params: ICellRendererParams<any, any, any>): boolean {
   return true;
  }
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params=params; //params get initialized
  }
  onButtonClick(){
    console.log(this.params);
    
    alert('Reminder sent to '+this.params.data.name+' !!' ) //accessing name from the params
  }

}


