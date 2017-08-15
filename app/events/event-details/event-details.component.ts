import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:any
  
  constructor(private eventService: SharedService,  ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1)
  }

}
