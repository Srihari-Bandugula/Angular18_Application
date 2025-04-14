import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,FormsModule,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //To read the change from the select element
  options:string='';

  constructor(private route:Router){ }

  //to fiilter the users based on the input
  //Query paramter routing
  navigate(){
    if (this.options=='Male') {
      this.route.navigate(['/routing/users'],{queryParams:{'gender':'Male'}});
    }
    else if(this.options=='Female'){
      this.route.navigate(['/routing/users'],{queryParams:{'gender':'Female'}});
    } 
  }
  

}
