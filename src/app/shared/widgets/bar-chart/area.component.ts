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
          text: 'temps consacré par semaines au tickets'
      },
      subtitle: {
        text: 'en heures'
      },
      xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
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
                  return this.value / 10;
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
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'marwa falten',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'khalil aaaa',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Souha Ayachi ',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'aaaaa',
          data: [2, 2, 2, 6, 13, 30, 46]
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
