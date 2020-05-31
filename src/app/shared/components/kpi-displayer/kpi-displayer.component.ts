import { Component, OnInit } from '@angular/core';
import {kpi} from 'src/app/classes/kpi';

@Component({
  selector: 'app-kpi-displayer',
  templateUrl: './kpi-displayer.component.html',
  styleUrls: ['./kpi-displayer.component.scss']
})
export class KpiDisplayerComponent implements OnInit {

  constructor() 
  {

  }
   kpis=[
    {id:1,name:"nombre de ticket closed par collaborateur",linkKpi:"http://localhost:4200/kpi/closed_tickets",linkConfig:"http://localhost:4200/config/closed-tickets"},
    {id:2,name:"rapport ticket closed/returned par collaborateur",linkKpi:"http://localhost:4200/kpi/porportion_closed_returned_tickets",linkConfig:"http://localhost:4200/config/closed-returned-tickets" },
    {id:3,name:"temps moyen de resolution de ticket",linkKpi:"http://localhost:4200/kpi/time-resolution_tickets" ,linkConfig:"http://localhost:4200/config/resolution-time-tickets"},
    {id:4,name:"priorite des tickets selon leur version",linkKpi:"http://localhost:4200/kpi/tickets_priority_by_version",linkConfig:"http://localhost:4200/config/tickets-with-priority" }
   ]
   collection: any[] = this.kpis;  
  
  ngOnInit() 
  {
  

  }

}
