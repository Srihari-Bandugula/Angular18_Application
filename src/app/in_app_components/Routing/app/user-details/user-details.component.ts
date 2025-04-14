import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  //to assign the user specified
  user:any;

  constructor(private userService:UserService,private route:ActivatedRoute ){
    this.route.paramMap.subscribe(params=>{           //accessing the route
      let idFromRoute=params.get('id');               //getting id from the route
      if(idFromRoute){                                //finding the user by using id from the UserService
        let userId=+idFromRoute;
        this.user=this.userService.users.find(u=>u.id==userId);
      }
    })
  }
}
