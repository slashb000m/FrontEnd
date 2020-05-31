import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin:[2,2,2,2],
          height:60
          
      },
      title: {
          text: null
      },
      subtitle: {
        text: null
      },
      yAxis: {
          title:{
            labels:{
            enabled: false
            },
            title:{
              text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickOption: []
          },

          labels: {
              formatter: function () {
                  return this.value / 100;
              }
          }
      },
      tooltip: {
          split: true,
          outside: true
      },
      Legend: {
        enabled: false
      },

     exporting: {
       enabled: false
     },

     xAxis: {
       labels:{
       enabled: false
       },
       title:{
         text: null
       },
       startOnTick: false,
       endOnTick: false,
       tickOption: []
     },
     credits: { 
       enabled: false
     },

      series: [
        {
          name: 'houssem foulen',
          data: [50,66,45,55]
      }
    ]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
      window.dispatchEvent(
          new Event('resize')
      );

  }, 300);
  }

}
