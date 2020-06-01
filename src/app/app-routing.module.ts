import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ConfigurationComponent } from './modules/configuration/configuration.component';
import { KpiModelClosedTicketsComponent } from './shared/components/kpi-model-closed-tickets/kpi-model-closed-tickets.component';
import { KpiModelReturnedValidatedTicketsComponent } from './shared/components/kpi-model-returned-validated-tickets/kpi-model-returned-validated-tickets.component';
import { KpiModelTimeResolutionTicketComponent } from './shared/components/kpi-model-time-resolution-ticket/kpi-model-time-resolution-ticket.component';
import { KpiModelTicketsPriorityPerVersionComponent } from './shared/components/kpi-model-tickets-priority-per-version/kpi-model-tickets-priority-per-version.component';
import { ConfigClosedTicketsComponent } from './shared/components/config-closed-tickets/config-closed-tickets.component';
import { ConfigClosedReturnedTicketsComponent } from './shared/components/config-closed-returned-tickets/config-closed-returned-tickets.component';
import { ConfigTimeResolutionTicketsComponent } from './shared/components/config-time-resolution-tickets/config-time-resolution-tickets.component';
import { ConfigTicketsWithPriorityComponent } from './shared/components/config-tickets-with-priority/config-tickets-with-priority.component';



const routes: Routes = [{  
  path:'',
component: DefaultComponent,
children: [
  {
    path: 'config/closed-tickets',
    component : ConfigClosedTicketsComponent
  },
  {
    path: 'config/closed-returned-tickets',
    component : ConfigClosedReturnedTicketsComponent
  },
  {
    path: 'config/resolution-time-tickets',
    component : ConfigTimeResolutionTicketsComponent
  },
  {
    path: 'config/tickets-with-priority',
    component : ConfigTicketsWithPriorityComponent
  },

  {
    path: 'kpi/tickets_priority_by_version',
    component : KpiModelTicketsPriorityPerVersionComponent
  },
  {
    path: 'kpi/time-resolution_tickets',
    component : KpiModelTimeResolutionTicketComponent
  
  },
  {
    path: 'kpi/porportion_closed_returned_tickets',
    component : KpiModelReturnedValidatedTicketsComponent
  
  },

  {
    path: 'kpi/closed_tickets',
    component : KpiModelClosedTicketsComponent
  
  },
  {
  path: '',
  component : DashboardComponent

}, 
{
  path: 'Kpis',
  component: PostsComponent
}, 
{
  path: 'configuration',
  component: ConfigurationComponent
},

 
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
