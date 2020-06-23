import { Component, OnInit } from '@angular/core';
import{getDashboards} from 'src/app/classes/getDashboards'
import { DataService } from 'src/app/data.service';
import { DashboardNom } from 'src/app/classes/DashboardNom';

@Component({
  selector: 'app-dashboard-creator',
  templateUrl: './dashboard-creator.component.html',
  styleUrls: ['./dashboard-creator.component.scss']
})
export class DashboardCreatorComponent implements OnInit {

  constructor(private dataService: DataService) { }
message:any;


  ngOnInit(): void {
  }

dashboard: DashboardNom = new DashboardNom("");

  getDashboard()
{
  console.log(this.dashboard)
  let resp=this.dataService.createDashboard(this.dashboard);
  resp.subscribe((data)=>this.message=data);
}
}
