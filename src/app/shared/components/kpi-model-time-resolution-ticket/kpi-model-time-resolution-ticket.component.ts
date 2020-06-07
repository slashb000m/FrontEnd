import { Component, OnInit } from '@angular/core';
import { TicketsResolutionTime } from 'src/app/classes/TicketsResolutionTime';
import { DataService } from 'src/app/data.service';
import { KpiConfig } from 'src/app/classes/KpiConfig';


@Component({
  selector: 'app-kpi-model-time-resolution-ticket',
  templateUrl: './kpi-model-time-resolution-ticket.component.html',
  styleUrls: ['./kpi-model-time-resolution-ticket.component.scss']
})
export class KpiModelTimeResolutionTicketComponent implements OnInit {
  search: any;
  Tickets:TicketsResolutionTime [];
  config: KpiConfig;

  constructor(private dataService: DataService) { }

  ngOnInit()
  {
    return this.dataService.getTicketsWithResolution()
    .subscribe(data => this.Tickets = data);


    this.dataService.getConfig3()
    .subscribe(data => this.config = data);
  }
  p: number = 1;
  collection: any[] = this.Tickets;  
}
