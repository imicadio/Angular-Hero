import { Component, OnInit } from '@angular/core'
import { SharedService } from '../shared/shared.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:any
  
  constructor(private eventService: SharedService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
