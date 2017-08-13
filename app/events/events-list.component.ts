import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events!</h1>
        <hr />
        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})

export class EventsListComponent {
    event1 = { 
        id: 1,
        name: 'Deanerys Targereyn',
        date: '9/26.2017',
        time: '10:00 am',
        price: 599.00,
        imageUrl: 'http://imicadio.com/wp-content/uploads/2016/09/20150406-MM-031-1024x1024.jpg',
        location: {
            address: '13-100',
            city: 'Nidzica',
            country: 'Polska'
        }
     }
}