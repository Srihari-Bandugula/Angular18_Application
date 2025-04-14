import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent as ComponentCommunicationComponent } from './in_app_components/ComponentCommunication/app/app.component';
import { AppComponent as ComponentComponent } from './in_app_components/Components/app/app.component';
import { AppComponent as DataBindComponent } from './in_app_components/DataBinding/app/app.component';
import { AppComponent as RouterComponent } from './in_app_components/Routing/app/app.component';
import { AppComponent as FormComponent } from './in_app_components/Forms/app/app.component';
import { AppComponent as LifeCycleHookComponent } from './in_app_components/LifeCycleHooks/app/app.component';
import { AppComponent as ObservablesComponent } from './in_app_components/Observables/app/app.component';
import { HomeComponent as UserHomeComponent } from './in_app_components/Routing/app/home/home.component';
import { UsersComponent } from './in_app_components/Routing/app/users/users.component';
import { CompletedTasksComponent } from './in_app_components/Routing/app/completed-tasks/completed-tasks.component';
import { AuthServiceService } from './in_app_components/Routing/app/auth-service.service';
import { ComponentsComponent } from './in_app_components/Routing/app/components/components.component';
import { DatabindingComponent } from './in_app_components/Routing/app/databinding/databinding.component';
import { DirectivesComponent } from './in_app_components/Routing/app/directives/directives.component';
import { UserDetailsComponent } from './in_app_components/Routing/app/user-details/user-details.component';
import { NotfoundComponent } from './in_app_components/Routing/app/notfound/notfound.component';
import { ComponentCommunicationComponent as RoutingComponentCommunicationComponent } from './in_app_components/Routing/app/component-communication/component-communication.component';
import { HomeComponent as FormsHomeComponent } from './in_app_components/Forms/app/home/home.component';
import { TemplateDrivenFormComponent } from './in_app_components/Forms/app/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './in_app_components/Forms/app/reactive-form/reactive-form.component';
import { APICommunicationComponent } from './in_app_components/api-communication/api-communication.component';


export const routes: Routes = [
    {
        path: '', component:HomeComponent
    },
    {
        path:'not',component:NotFoundComponent
    },
    {
        path:'components',component:ComponentComponent
    },
    {
        path:'data-binding',component:DataBindComponent
    },
    {
        path:'component-communication',component:ComponentCommunicationComponent
    },
    {
        path:'routing',component:RouterComponent,
        children: [
            {
                path:'',component:UserHomeComponent
            },
            {
                path:'home',component:UserHomeComponent
            },
            {
                path:'users',component:UsersComponent
            },
            {
                path:'completed-tasks',component:CompletedTasksComponent,canActivate:[AuthServiceService],canDeactivate:[AuthServiceService],
                children:
                [
                    {
                        path:'components',component:ComponentsComponent
                    },
                    {
                        path:'databinding',component:DatabindingComponent
                    },
                    {
                        path:'component-communication',component:RoutingComponentCommunicationComponent
                    },
                    {
                        path:'directives',component:DirectivesComponent
                    }
                ]
            },
            {
                path:'users/:id',component:UserDetailsComponent
            },
            {
                path:'**',component:NotfoundComponent
            }
        ]
    },
    {
        path:'forms',component:FormComponent,
        children:[
            {
                path:'',component:FormsHomeComponent,
            },
            {
                path:'home',component:FormsHomeComponent
            },
            {
                path:'template-driven-forms',component:TemplateDrivenFormComponent
            },
            {
                path:'reactive-forms',component:ReactiveFormComponent
            }
        ]
    },
    {
        path:'lifecycle-hooks',component:LifeCycleHookComponent
    },
    {
        path:'observables',component:ObservablesComponent
    },
    {
        path:'api-communication',component:APICommunicationComponent
    }

];
