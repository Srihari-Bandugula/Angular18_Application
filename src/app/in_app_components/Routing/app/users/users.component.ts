import { Component, Directive, ViewChild } from '@angular/core';
import { ActivatedRoute,  Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //to get the users list from the UserService
  teamMembers:any;

  //For static routing (just rendering the users that are present)
  constructor(private user:UserService,private route:ActivatedRoute,private r:Router){
    this.route.queryParamMap.subscribe(qparams=>{       //to filter the users
      let genderFormRoute=qparams.get('gender');
      if (genderFormRoute!=null) {                      //filtering based on the gender present in URL
        this.teamMembers=this.user.users.filter(u=>{
          return u.gender==genderFormRoute;
        });
      } else {                                          //returning all the users
        this.teamMembers=this.user.users;
      }
    })
  }

  //for router parameter
  person(personId:any){
    this.r.navigate(['/users',personId])
  }
}
