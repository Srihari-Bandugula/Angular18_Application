import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate,CanDeactivate<any> {

  //implementing Unimplemented method from CanDeactivate Interface
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    return confirm("Are you sure want to leave Completed Tasks?");   //getting boolean input from the user
  }

  //implementing Unimplemented method from CanActivate Interface
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return confirm("Confirm to go to Completed Tasks?");      //getting boolean input from the
  }

  constructor() { }
}
