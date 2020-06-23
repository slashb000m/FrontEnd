import { Injectable } from '@angular/core';
import { ClosedTicket } from 'src/app/classes/ClosedTicket';
import {HttpClient} from '@angular/common/http'
import { ReturnedValidatedTickets } from './classes/ReturnedValidatedTickets';
import { TicketsResolutionTime } from './classes/TicketsResolutionTime';
import { TicketsPriorityByVersion } from './classes/TicketsPriorityByVersion';
import { TicketsPriority } from './classes/TicketsPriority';
import { KpiConfig } from './classes/KpiConfig';
import { ConfigStatut } from './classes/ConfigStatut';
import { ConfigSprint } from './classes/ConfigSprint';
import { ConfigEpic } from './classes/ConfigEpic';
import { ConfigDateDeb } from './classes/ConfigDateDeb';
import { ConfigDateFin } from './classes/ConfigDateFin';
import { ConfigVersion } from './classes/ConfigVersion';
import { ConfigNom } from './classes/ConfigNom';
import { getConfigNom } from './classes/getConfigNom';
import { getConfigStatut } from './classes/getConfigStatut';
import { getConfigModule } from './classes/getConfigModule';
import { getConfigEpic } from './classes/getConfigEpic';
import { getConfigVersion } from './classes/getConfigVersion';
import { getDashboards } from './classes/getDashboards';
import { Id } from './classes/id';
import {DashboardNom} from './classes/DashboardNom';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  // get methods for tabs 


  getClosedTicket()
  {
    return this._http.get<ClosedTicket[]>("http://localhost:8181/kpi/productivite/closed-tickets");
  }
  getValidated_Returned_Tickets()
  {
    return this._http.get<ReturnedValidatedTickets[]>("http://localhost:8181/kpi/productivite/proportion-returned-validated-tickets");
  }
  getTicketsWithResolution()
  {
    return this._http.get<TicketsResolutionTime[]>("http://localhost:8181/kpi/efficacite/temps_moyen_resolution_ticket");
  }
  getTicketsWithPriority()
  {
    return this._http.get<TicketsPriority[]>("http://localhost:8181/kpi/produit/priorite_tickets_par_version");
  }




  // config of kpi's 



public KpiConfigNomCollab(ConfigNom)
  {
    return this._http.post("http://localhost:8181/configNom/Kpi",ConfigNom,{responseType:'text' as 'json'});
  }
  

public KpiConfigStatutTickets(ConfigStatut)
{
  return this._http.post("http://localhost:8181/configStatut/Kpi",ConfigStatut,{responseType:'text' as 'json'});
}




public KpiConfigVersion(ConfigVersion)
{
  return this._http.post("http://localhost:8181/configVersion/Kpi",ConfigVersion,{responseType:'text' as 'json'});
}

public KpiConfigModuleTickets(ConfigModule)
{
  return this._http.post("http://localhost:8181/configModule/Kpi",ConfigModule,{responseType:'text' as 'json'});
}

public KpiConfigSprintTickets(ConfigSprint)
{
  return this._http.post("http://localhost:8181/configSprint/Kpi",ConfigSprint,{responseType:'text' as 'json'});
}
public KpiConfigEpicTickets(ConfigEpic)
{
  return this._http.post("http://localhost:8181/configEpic/Kpi",ConfigEpic,{responseType:'text' as 'json'});
}

public KpiConfigDateDebTickets(ConfigDateDeb)
{
  return this._http.post("http://localhost:8181/configDateDeb/Kpi",ConfigDateDeb,{responseType:'text' as 'json'});
}
public KpiConfigDateFintickets(ConfigDateFin)
{
  return this._http.post("http://localhost:8181/configDateFin/Kpi",ConfigDateFin,{responseType:'text' as 'json'});
}
  
 




  get_Group_By_Priorite()
  {
    return this._http.get<any[]>("http://localhost:8181/kpi/produit/group-by-priorite_tickets_par_version");
  }

  get_Group_By_Resolution_Time()
  {
    return this._http.get<any[]>("http://localhost:8181/kpi/efficacite/group-by-temps_moyen_resolution_ticket");
  }
  get_Group_By_Closed_Returned()
  {
    return this._http.get<any[]>("http://localhost:8181/kpi/productivite/group-by-proportion-returned-validated-tickets");
  }

  
  // get Sservices for config 


  getConfig1()
  {
    return this._http.get<KpiConfig>("http://localhost:8181/Config/kpi1");
  }
  getConfig2()
  {
    return this._http.get<KpiConfig>("http://localhost:8181/Config/kpi2");
  }
  getConfig3()
  {
    return this._http.get<KpiConfig>("http://localhost:8181/Config/kpi3");
  }
  getConfig4()
  {
    return this._http.get<KpiConfig>("http://localhost:8181/Config/kpi4");
  }

// get values for input 


getConfigNom()
{
  return this._http.get<getConfigNom[]>("http://localhost:8181/champsConfig/nom");
}

getConfigStatut()
{
  return this._http.get<getConfigStatut[]>("http://localhost:8181/champsConfig/statut");
}
getConfigmodule()
{
  return this._http.get<getConfigModule[]>("http://localhost:8181/champsConfig/module");
}
getConfigEpic()
{
  return this._http.get<getConfigEpic[]>("http://localhost:8181/champsConfig/epic");
}
getConfigVersion()
{
  return this._http.get<getConfigVersion[]>("http://localhost:8181/champsConfig/version");
}


// get Dashboards


getDashboards()
  
{
    return this._http.get<getDashboards[]>("http://localhost:8181/get/Dashboards")
}


// delete Dashboard


public deleteDashboard(Id)
{
  return this._http.post("http://localhost:8181/delete/dashboard",Id,{responseType:'text' as 'json'});
}


public createDashboard(DashboardNom)
{
  return this._http.post("http://localhost:8181/create/dashboard",DashboardNom,{responseType:'text' as 'json'});
}



}
