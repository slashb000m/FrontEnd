import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor() { }

  @Input() title:string;
  @Input() col_1:string;
  @Input() col_2:string;
  @Input() col_3:string;
  @Input() col_4:string;

  
  search: any;
  datas= 
  [
    {col_1:"6.2-00", col_2:65 , col_3:78 , col_4:32},
    {col_1:" 6.1-00a", col_2:41, col_3:14, col_4:7},
    {col_1:" 6.1-00b", col_2:12, col_3:36, col_4:18},
    {col_1:"5.2-02e", col_2:52, col_3:45, col_4:21},
    {col_1:"5.2-02i", col_2:23, col_3:6, col_4:2},
    {col_1:"6.2-02", col_2:65 , col_3:78 , col_4:32},
    {col_1:" 6.1-06a", col_2:41, col_3:14, col_4:7},
    {col_1:" 6.1-70b", col_2:92, col_3:36, col_4:18},
    {col_1:"5.2-002e", col_2:52, col_3:35, col_4:21},
    {col_1:"5.2-02i", col_2:23, col_3:6, col_4:2},
    {col_1:"6.2-00", col_2:69 , col_3:96 , col_4:32},
    {col_1:" 6.1-50a", col_2:41, col_3:94, col_4:7},
    {col_1:" 6.1-30b", col_2:60, col_3:36, col_4:18},
    {col_1:"5.2-92e", col_2:52, col_3:45, col_4:21},
    {col_1:"5.2-02i", col_2:8, col_3:63, col_4:2},
    
  ];
  
  p: number = 1;
  collection: any[] = this.datas;  



  


  ngOnInit(): void {
  }

}
