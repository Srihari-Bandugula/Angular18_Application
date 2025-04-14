import { Component } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-home',
  imports: [ChildComponent, ParentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
