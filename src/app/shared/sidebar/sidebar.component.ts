import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../providers/services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private service: ServicesService) { }


  ngOnInit() {
  }

}
