import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'node:console';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() name:any;
  gMail:string='';
  mobile:string='';
  gender:any=''
  @Output() childMail:EventEmitter<string>=new EventEmitter();
  sendMail(){
    this.childMail.emit(this.gMail);
  }

}
