import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailCoponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedService } from './events/shared/shared.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'
import { CreateEventComponent } from './events/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/events-list-resolver.service'

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailCoponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [
    SharedService, 
    ToastrService, 
    EventRouteActivator,
    EventListResolver,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to canel?')
  return false
}