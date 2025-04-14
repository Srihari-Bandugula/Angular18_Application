import { Component, OnInit } from '@angular/core';
import { Mobile, MobileService } from './mobile.service';
import { log } from 'node:console';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-api-communication',
  imports: [CommonModule,FormsModule],
  templateUrl: './api-communication.component.html',
  styleUrl: './api-communication.component.scss'
})
export class APICommunicationComponent implements OnInit {
  mobiles:Mobile[]=[];
  mobileName='';
  mobileRam='';
  mobileRom='';
  mobilePrice='';
  mobileId='';
  formHeader:string='';
  openForm:boolean=false;
  addOrEdit='';
  body:any;
  task:string=''
  constructor(private mob:MobileService){ }

  formOpen(data:Mobile|null=null){
    this.openForm=true;
    if (data) {
      this.mobileName=data.name;
      this.mobileRam=data.RAM;
      this.mobileRom=data.ROM;
      this.mobilePrice=data.Price;
      this.mobileId=data.id;
      this.formHeader='Edit Mobile'
      this.addOrEdit='Save'
    } 
    else{
      this.clearForm();
      this.formHeader='Add Mobile'
      this.addOrEdit='Add'
    }
  }
  formClose(content:string|null=null){ //content for add/save button and null for cancel button
    this.openForm=false;  //to close the form
    if(content){  //if content is true then changes (save/add) will happen 
      if(this.mobileId){ //for updation of Mobile (id is present)
        this.body={ //the body to be put
          'id':this.mobileId,
          'name':this.mobileName,
          'RAM':this.mobileRam,
          'ROM':this.mobileRom,
          'Price':this.mobilePrice
        }
        this.putMobile(this.body);//To put (update) body
      }
      else{ //To add a new mobile (id is not present)
        this.body={ //the body to be added
          'name':this.mobileName,
          'RAM':this.mobileRam,
          'ROM':this.mobileRom,
          'Price':this.mobilePrice
        }
        this.postMobile(this.body);  //To add new body
      }
    }
    
  }

  clearForm(){
    this.mobileName='';
      this.mobileRam='';
      this.mobileRom='';
      this.mobilePrice='';
      this.mobileId='';
  }

  ngOnInit(): void {
    this.getMobiles()
  }

  getMobiles(){
    this.mob.fetchMobiles().subscribe(
      (mobileArray)=>this.mobiles=mobileArray,
      (error)=>console.log(error)
    );
  }

  deleteMobile(id:any){
    this.mob.deleteMobile(id).subscribe(()=>this.getMobiles());
    this.task="Mobile Deleted successfully";
    this.clearTaskAfterDelay();
  }

  putMobile(data:Object){
    this.mob.updateMobile(data).subscribe(()=>{
      this.getMobiles();
      this.task="Mobile Updated successfully"
      this.clearTaskAfterDelay();
  });
    
  }

  postMobile(data:Object){
    this.mob.addMobile(data).subscribe(()=>this.getMobiles())
    this.task="Mobile Added successfully"
    this.clearTaskAfterDelay();
  }

  clearTaskAfterDelay() {
    setTimeout(() => {
      this.task = "";
    }, 9000);
  }
}

