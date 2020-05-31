import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface Collaborateurs {
  id: number;
  nom: string;

}
const ELEMENT_DATA: Collaborateurs[] = [
  {id: 1, nom: 'NX GP3'},
  {id: 2, nom: 'NX DataHub'},
  {id: 3, nom: 'NX Manager'},
  {id: 4, nom: 'APV2'},
  {id: 5, nom: 'NX Complience'},
  {id: 6, nom: 'NX Testing'}
]

  
@Component({
  selector: 'app-projet-config',
  templateUrl: './projet-config.component.html',
  styleUrls: ['./projet-config.component.scss']
})
export class ProjetConfigComponent implements OnInit {

    displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<Collaborateurs>(ELEMENT_DATA);
    selection = new SelectionModel<Collaborateurs>(true, []);
  
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: Collaborateurs): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
  
    
  constructor() { }

  ngOnInit(): void {
  }

}
