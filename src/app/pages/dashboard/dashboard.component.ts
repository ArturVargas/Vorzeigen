import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../providers/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( public ss: ServicesService) { 
    this.ss.getEvents()
      .subscribe( (res: any []) => {
        console.log(res);
      });
  }

  ngOnInit() {
  }

}
