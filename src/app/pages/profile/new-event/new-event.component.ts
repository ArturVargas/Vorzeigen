import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  newEvent: any = { };

  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

  createEvnt() {
    console.log( this.newEvent );
  }

}
