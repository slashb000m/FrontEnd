import { Component, OnInit } from '@angular/core';
import { TicketsPriorityByVersion } from 'src/app/classes/TicketsPriorityByVersion';
import { DataService } from 'src/app/data.service';
import { TicketsPriority } from 'src/app/classes/TicketsPriority';
@Component({
  selector: 'app-kpi-model-tickets-priority-per-version',
  templateUrl: './kpi-model-tickets-priority-per-version.component.html',
  styleUrls: ['./kpi-model-tickets-priority-per-version.component.scss']
})
export class KpiModelTicketsPriorityPerVersionComponent implements OnInit {


  search: any;
  ticketsWithPriority:TicketsPriority [];


  constructor(private dataService: DataService) { }

  ngOnInit()
  {
    return this.dataService.getTicketsWithPriority()
    .subscribe(data => this.ticketsWithPriority = data);
  }
  p: number = 1;
  collection: any[] = this.ticketsWithPriority;
}
