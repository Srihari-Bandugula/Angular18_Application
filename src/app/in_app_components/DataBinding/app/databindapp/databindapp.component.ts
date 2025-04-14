import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databindapp',
  imports: [FormsModule],
  templateUrl: './databindapp.component.html',
  styleUrl: './databindapp.component.css'
})
export class DatabindappComponent {
  
  title = 'data binding'; //String interpolation binding
  inputText:string = 'Two way binding';   // Two-way Binding
  // Property Binding
  path = '/assets/propertyBind.jpg';
  isDisabled = false;
  // Class & Style Binding
  isActive = false;
  fontSize = 18;
  // Event Binding
  count = 1;
  increment() {
    this.count++;
    if(this.count%2==0){
      this.isActive=true;
    }
    else{
      this.isActive=false;
    }
  }
}
