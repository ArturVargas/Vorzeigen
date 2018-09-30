import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../providers/services.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  newEvent: any = { };

  lat = 51.678418;
  lng = 7.809007;

  constructor(private ss: ServicesService) { }

  ngOnInit() {
  }

  createEvnt(data) {
    this.ss.createEvent(data).then( res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });

  }

}
