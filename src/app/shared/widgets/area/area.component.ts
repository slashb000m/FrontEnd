import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {


  constructor() { }

  chartOptions: {};
  
   Highcharts = Highcharts;

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'temps moyen de résolution de ticket'
      },
      subtitle: {
        text: 'en heures'
      },
      xAxis: {
          categories: [
          '1er semaine','2eme semaine','3eme semaine','4eme semaine','5eme semaine','6eme semaine','7eme semaine',
          '8eme semaine','9eme semaine','10eme semaine','11eme semaine','12eme semaine','13eme semaine'

        ],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'heures'
          },
          labels: {
              formatter: function () {
                  return this.value;
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' heures'
      },
     exporting : {
       enabled: true
     },
     credits: { 
       enabled: false
     },

      series: [{
          name: 'houssem foulen',
          data: [0,6,8,20,10,15,6,8,20,0,15,6,8]
      }, {
          name: 'marwa falten',
          data: [20,0,4,5,10,4,6,8,7,0,9,6,5]
      }, {
          name: 'khalil aaaa',
          data: [16,7, 0, 19, 14, 20, 5, 10, 15, 18, 12, 13, 17]
      }, {
          name: 'Souha',
          data: [11, 5 ,17 ,15 ,0 ,7 ,10, 19, 6, 0, 9, 8, 20]
      }, {
          name: 'aaaaa',
          data: [18,12, 0, 8, 9, 5, 13, 11, 14, 10, 20, 6, 0]
      }]
  };

  HC_exporting(Highcharts)
  setTimeout(() => {
      window.dispatchEvent(
          new Event('resize')
      );

  }, 300);


  }

}
