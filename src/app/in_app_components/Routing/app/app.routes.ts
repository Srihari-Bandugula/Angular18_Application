import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { ComponentsComponent } from './components/components.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { DirectivesComponent } from './directives/directives.component';
import { AuthServiceService } from './auth-service.service';
import { UserDetailsComponent } from './user-details/user-details.component';
export const routes: Routes = [
    // {
    //     path:'',component:HomeComponent
    // },
    // {
    //     path:'home',component:HomeComponent
    // },
    // {
    //     path:'users',component:UsersComponent
    // },
    // {
    //     path:'completed-tasks',component:CompletedTasksComponent,canActivate:[AuthServiceService],canDeactivate:[AuthServiceService],
    //     children:
    //     [
    //         {
    //             path:'components',component:ComponentsComponent
    //         },
    //         {
    //             path:'databinding',component:DatabindingComponent
    //         },
    //         {
    //             path:'component-communication',component:ComponentCommunicationComponent
    //         },
    //         {
    //             path:'directives',component:DirectivesComponent
    //         }
    //     ]
    // },
    // {
    //     path:'users/:id',component:UserDetailsComponent
    // },
    // {
    //     path:'**',component:NotfoundComponent
    // }
];
