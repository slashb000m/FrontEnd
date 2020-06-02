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




public KpiConfigStatut(ConfigStatut)
{
  return this._http.post("http://localhost:8181/configNom/Kpi/ClosedTickets",ConfigStatut,{responseType:'text' as 'json'});
}

public KpiConfigSprint(ConfigSprint)
{
  return this._http.post("http://localhost:8181/configSprint/Kpi/ClosedTickets",ConfigSprint,{responseType:'text' as 'json'});
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

}
