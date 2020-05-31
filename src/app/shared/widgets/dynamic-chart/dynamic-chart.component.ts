import {Component, Input, OnInit} from '@angular/core';


interface Chart {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.scss']
})
export class DynamicChartComponent implements OnInit {

   switch_Pie_chart: Boolean = true;
  switch_Bar_chart: Boolean  = false;
  switch_Pie_chart2: Boolean  = false;
  switch_Bar_chart2: Boolean  = false;


  constructor() { }

  ngOnInit(): void {
  }
  switchPieChart()
  {
    this.switch_Pie_chart = true;
    this.switch_Bar_chart = false;
    this.switch_Pie_chart2 = false;
    this.switch_Bar_chart2 = false;

  }
  switchBarChart()
  {
    this.switch_Pie_chart = false;
    this.switch_Bar_chart = true;
    this. switch_Pie_chart2 = false;
    this. switch_Bar_chart2 = false;
  }
  switchBarChart2()
  {
    this.switch_Pie_chart = false;
    this.switch_Bar_chart = false;
    this.switch_Pie_chart2 = true;
    this. switch_Bar_chart2 = false;
  }
  switchPieChart2()
  {
    this.switch_Pie_chart = false;
    this.switch_Bar_chart = false;
    this.switch_Pie_chart2 = false;
    this.switch_Bar_chart2 = true;
  }

}
