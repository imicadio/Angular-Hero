import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { SharedService } from '../shared/shared.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private sharedService:SharedService, private router:Router ) {
        
    }

    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this.sharedService.getEvent(+route.params['id'])
    
    if (!eventExists)
        this.router.navigate(['/404'])
    return eventExists
    
    }
}