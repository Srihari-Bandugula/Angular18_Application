import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  //notification
  notification:string='';
  // sendData(formData:any){
  //   console.log(formData);
    
  // }
  sendFormData(formData:any){
    console.log(formData);
    if(formData.valid){
      this.notification='Student Registration Successful'
    }
    setTimeout(() => {
      this.notification='';
    }, 3000);
    
  }

}
