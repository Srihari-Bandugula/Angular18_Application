import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentData = 'Initial data from parent';
  destroyComponent: boolean = false;

  updateData() {
    this.parentData = 'Updated data from parent';
  }
  // destroyParentComponent(){
  //   this.destroyComponent=true;
  // }
}
