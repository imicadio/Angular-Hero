import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
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
    `,
    styles: [`
    .thumbnail { min-height: 210px; }
    `]
})

export class EventThumbnailCoponent{
    @Input() event:any
}