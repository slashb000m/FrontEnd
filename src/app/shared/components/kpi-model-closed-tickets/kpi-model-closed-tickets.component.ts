import { Component, OnInit } from '@angular/core';
import { ClosedTicket } from 'src/app/classes/ClosedTicket';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-kpi-model-closed-tickets',
  templateUrl: './kpi-model-closed-tickets.component.html',
  styleUrls: ['./kpi-model-closed-tickets.component.scss']
})
export class KpiModelClosedTicketsComponent implements OnInit {
  search: any;
  closedTickets:ClosedTicket[];


  constructor(private dataService: DataService) { }

  ngOnInit()
  {
    return this.dataService.getClosedTicket()
    .subscribe(data => this.closedTickets = data);
  }
  p: number = 1;
  collection: any[] = this.closedTickets;  


}
