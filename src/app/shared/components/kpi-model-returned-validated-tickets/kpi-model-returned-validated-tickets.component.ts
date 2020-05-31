import { Component, OnInit } from '@angular/core';
import { ReturnedValidatedTickets } from 'src/app/classes/ReturnedValidatedTickets';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-kpi-model-returned-validated-tickets',
  templateUrl: './kpi-model-returned-validated-tickets.component.html',
  styleUrls: ['./kpi-model-returned-validated-tickets.component.scss']
})
export class KpiModelReturnedValidatedTicketsComponent implements OnInit {

  

  search: any;
  TicketsProportions:ReturnedValidatedTickets[];


  constructor(private dataService: DataService) { }

  ngOnInit()
  {
    return this.dataService.getValidated_Returned_Tickets()
    .subscribe(data => this.TicketsProportions = data);
  }

  
  

  p: number = 1;
  collection: any[] = this.TicketsProportions;  

}
