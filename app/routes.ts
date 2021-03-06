import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { ErrorComponent } from './error/error.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/events-list-resolver.service'


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]