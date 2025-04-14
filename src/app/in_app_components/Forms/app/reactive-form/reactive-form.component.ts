import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { rejects } from 'node:assert';

@Component({
  selector: 'app-reactive-form',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  student:FormGroup;
  //notification 
  notification:string='';

  constructor(fb:FormBuilder){
    this.student=fb.group({
      surname:[null,[Validators.required]],
      name:fb.control(null,[Validators.required]),
      dob:[null,[Validators.required]],
      mail:[null,[Validators.required,Validators.email]],
      ph:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      rollNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      resume:[null,[Validators.required]],
      workLocation:fb.array([new FormControl(''),new FormControl(''),new FormControl('')]),
      password:['',[Validators.required,this.validatePassword()]],
    })
  }
  //FormGroup  instance
  // student=new FormGroup(
  //   {
  //     surname:new FormControl(null,[Validators.required]),
  //     name:new FormControl(null,[Validators.required]),
  //     dob:new FormControl(null,[Validators.required]),
  //     mail:new FormControl(null,[Validators.required,Validators.email]),
  //     ph:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
  //     rollNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
  //     resume:new FormControl(null,[Validators.required]),
  //     workLocation:new FormArray([new FormControl(''),new FormControl(''),new FormControl('')]),
  //     password:new FormControl<string>('',[Validators.required,this.validatePassword()]),
  //   }

  // );
    sendFormData(){
      if(this.student.valid){
        localStorage.setItem('formData', JSON.stringify(this.student.value)); // Save to Local Storage
        this.student.reset();
        this.notification='Data saved successfully'
      }
      setTimeout(() => {
        this.notification='';
      }, 3000);    
    }

    validatePassword(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const password: string = control.value || ''; // Handle null safely
  
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasMinCharacters = password.length >= 8;
  
        return hasUpperCase && hasNumber && hasSpecialCharacter && hasMinCharacters
          ? null  // ✅ Password is valid
          : { notValid: true };  // ❌ Password does not meet criteria
      };

    }
    // validateWorkLocation(control:any){
    //   let response=new Promise((resolve,rejects)=>{
    //     let name=control.value;
    //     setTimeout(()=>{
    //       if (localStorage.getItem('formData')?.includes(name)) {
    //         resolve({'duplicateUser':true});
    //       } else {
    //         resolve (null);
    //       }
    //     },3000)
    //   })
    //   return response
    // }

    // sendData(){
    //   console.log(this.student);
      
    // }
}
