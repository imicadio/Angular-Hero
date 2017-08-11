import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events!</h1>
        <hr />
        <div class="well hoverwell thumbnail">
            <h2>{{ event.name }}</h2>
            <div>Date: {{ event.date }}</div>
            <div>Time: {{ event.time }}</div>
            <div>Price: \${{ event.price }}</div>
            <div>
                <span>Location: {{ event.location.address }}</span>
                <span>&nbsp;</span>
                <span>City: {{ event.location.city }}</span>
                <span>&nbsp;</span>
                <span>Country: {{ event.location.country }}</span>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent {
    event = { 
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