import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from'@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { TableComponent } from './widgets/table/table.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReusableChartComponent } from './widgets/reusable-chart/reusable-chart.component';
import { BarChartComponent } from './widgets/bar-chart/bar-chart.component';
import { DynamicChartComponent } from './widgets/dynamic-chart/dynamic-chart.component';
import {MatSelectModule} from '@angular/material/select';
import { GeneralConfigComponent } from './widgets/general-config/general-config.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CollabConfigComponent } from './widgets/collab-config/collab-config.component';
import { ProjetConfigComponent } from './widgets/projet-config/projet-config.component';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import { KpiDisplayerComponent } from './components/kpi-displayer/kpi-displayer.component';
import { KpiModelClosedTicketsComponent } from './components/kpi-model-closed-tickets/kpi-model-closed-tickets.component';
import {HttpClientModule} from '@angular/common/http';
import { KpiModelReturnedValidatedTicketsComponent } from './components/kpi-model-returned-validated-tickets/kpi-model-returned-validated-tickets.component';
import { KpiModelTimeResolutionTicketComponent } from './components/kpi-model-time-resolution-ticket/kpi-model-time-resolution-ticket.component';
import { KpiModelTicketsPriorityPerVersionComponent } from './components/kpi-model-tickets-priority-per-version/kpi-model-tickets-priority-per-version.component';
import { ConfigClosedTicketsComponent } from './components/config-closed-tickets/config-closed-tickets.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfigClosedReturnedTicketsComponent } from './components/config-closed-returned-tickets/config-closed-returned-tickets.component';
import { ConfigTimeResolutionTicketsComponent } from './components/config-time-resolution-tickets/config-time-resolution-tickets.component';
import { ConfigTicketsWithPriorityComponent } from './components/config-tickets-with-priority/config-tickets-with-priority.component';
import { DashboardCreatorComponent } from './components/dashboard-creator/dashboard-creator.component';
import { DashboardDisplayerComponent } from './components/dashboard-displayer/dashboard-displayer.component';






@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    TableComponent,
    ReusableChartComponent,
    BarChartComponent,
    DynamicChartComponent,
    GeneralConfigComponent,
    CollabConfigComponent,
    ProjetConfigComponent,
    KpiDisplayerComponent,
    KpiModelClosedTicketsComponent,
    KpiModelReturnedValidatedTicketsComponent,
    KpiModelTimeResolutionTicketComponent,
    KpiModelTicketsPriorityPerVersionComponent,
    ConfigClosedTicketsComponent,
    ConfigClosedReturnedTicketsComponent,
    ConfigTimeResolutionTicketsComponent,
    ConfigTicketsWithPriorityComponent,
    DashboardCreatorComponent,
    DashboardDisplayerComponent,
    


    
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatInputModule,
    NgxPaginationModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule


    

  ],
  exports: [
     HeaderComponent,
     FooterComponent,
     SidebarComponent,
     AreaComponent,
     CardComponent,
     TableComponent,
     ReusableChartComponent,
     BarChartComponent,
     DynamicChartComponent, 
     GeneralConfigComponent,
     CollabConfigComponent,
     ProjetConfigComponent,
     KpiDisplayerComponent,
     KpiModelClosedTicketsComponent,
     HttpClientModule,
     KpiModelReturnedValidatedTicketsComponent,
     ConfigClosedTicketsComponent,
     ConfigClosedReturnedTicketsComponent,
     ConfigTimeResolutionTicketsComponent,
     ConfigTicketsWithPriorityComponent,
     DashboardCreatorComponent,
     DashboardDisplayerComponent
   
  ]
})
export class SharedModule { }
