import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "../child/child.component";
import { DataService } from '../data.service';
@Component({
  selector: 'app-parent',
  imports: [FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name:string='';
  gMail:any='';
  mOrF:string='';
  personData: any;
  @ViewChild(ChildComponent) G:any;

  constructor(private dataService:DataService){
    this.personData=this.dataService.person;
  }
  ngAfterViewChecked() {
    this.mOrF = this.G.gender;
  }
  
}
