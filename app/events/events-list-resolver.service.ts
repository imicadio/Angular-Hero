import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { SharedService } from './shared/shared.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
constructor(private eventService:SharedService){
    
}

    resolve() {
        return this.eventService.getEvents().map(events => events)
    }
}