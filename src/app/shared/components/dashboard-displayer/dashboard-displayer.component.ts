import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { getDashboards } from 'src/app/classes/getDashboards';
import { Id } from 'src/app/classes/Id';


@Component({
  selector: 'app-dashboard-displayer',
  templateUrl: './dashboard-displayer.component.html',
  styleUrls: ['./dashboard-displayer.component.scss']
})
export class DashboardDisplayerComponent implements OnInit {

  constructor(private dataService: DataService) { }

  dashboards:getDashboards[];
  ngOnInit(){
    return this.dataService.getDashboards()
    .subscribe(data => this.dashboards = data);
    
  }

  message: any;
aaaa: Id=new Id(1);


  deleteDashboard(id:number)
  {var r = confirm("etes vous sur de vouloir supprimer le Dashboard ? \n Cette opération est irréversible !");
   
  if (r == true) {
    this.aaaa.dashboard_id=id;

    
    let resp=this.dataService.deleteDashboard(this.aaaa);
    resp.subscribe((data)=>this.message=data);
    location.reload()
  }
}

openDashboard(id:number)
  {
    this.aaaa.dashboard_id=id;

    
    let resp=this.dataService.consultDashboard(this.aaaa);
    resp.subscribe((data)=>this.message=data);
  } 



}
