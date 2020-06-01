import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DataService} from '../../../data.service';
import {TicketsPriorityByVersion} from '../../../classes/TicketsPriorityByVersion';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './reusable-chart.component.html',
  styleUrls: ['./reusable-chart.component.scss']
})
export class ReusableChartComponent implements OnInit {
  @Input() switch_Pie_chart2;
  @Input() switch_Pie_chart;
  Highcharts = Highcharts;

  chartOptions;
  priorite: any[]=[];
closedRetuned:any[]=[];
    constructor(private dataService: DataService) {

   }

 async ngOnInit() {
    // @ts-ignore
   this.priorite = await this.dataService.get_Group_By_Priorite().toPromise();
   this.priorite = this.priorite.map(object => {
     return {name: object.priorite, y: object.nb_de_ticket}
   })
   this.closedRetuned = await this.dataService.get_Group_By_Closed_Returned().toPromise();
   this.closedRetuned = this.closedRetuned.map(object => {
     return {name: object.last_name, y: object.nb_de_ticket}
   })



// @ts-ignore
if(this.switch_Pie_chart2){
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Proportion des tickets selon leur Priorité  '
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:f}%</b>'


      },
      credits: {
        enabled: false
      },
      accessibility: {
          point: {
              valueSuffix: ''
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f}'
              }
          }
      },
        series: [{
          name: 'Pourcentage',
          colorByPoint: true,
          data: this.priorite
        }]
   }
  }

   if(this.switch_Pie_chart){
     this.chartOptions = {
       chart: {
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: false,
         type: 'pie'
       },
       title: {
         text: 'Proportion des tickets validé par rapport a ceux retourné  '
       },
       tooltip: {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'


       },
       credits: {
         enabled: false
       },
       accessibility: {
         point: {
           valueSuffix: ''
         }
       },
       plotOptions: {
         pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           dataLabels: {
             enabled: true,
             format: '<b>{point.name}</b>: {point.percentage:.1f}'
           }
         }
       },
       series: [{
         name: 'Pourcentage',
         colorByPoint: true,


         data: this.closedRetuned


       }]
     }


   }
 }
}
