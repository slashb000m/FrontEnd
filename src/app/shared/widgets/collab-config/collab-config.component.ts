import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface Collaborateurs {
  id: number;
  nom: string;
  poste: string;
  projet_affecte: string;
}

const ELEMENT_DATA: Collaborateurs[] = [
  {id: 1, nom: 'khalil', poste: "developpeur", projet_affecte: 'NX GP3'},
  {id: 2, nom: 'Mahmoud', poste: "developpeur", projet_affecte: 'NX DataHub'},
  {id: 3, nom: 'Wahida', poste: "developpeur", projet_affecte: 'NX Testing'},
  {id: 4, nom: 'Marwen', poste: "developpeur", projet_affecte: 'Nx Complience'},
  {id: 5, nom: 'Amina', poste: "developpeur", projet_affecte: 'APV2'},
  {id: 6, nom: 'Sihem', poste: "developpeur", projet_affecte: 'APV2'},
  {id: 7, nom: 'Yassine', poste: "developpeur", projet_affecte: 'NX DataHub'},
  {id: 8, nom: 'Dhia', poste: "developpeur", projet_affecte: 'NX GP3'},
  {id: 9, nom: 'Maryem', poste: "developpeur", projet_affecte: 'GP3'},
  {id: 10, nom: 'Marwa', poste: "developpeur", projet_affecte: 'NX DataHub'},
  {id: 11, nom: 'selim', poste: "developpeur", projet_affecte: 'APV2'},
  {id: 12, nom: 'Akrém', poste: "developpeur", projet_affecte: 'NX GP3'},
  {id: 13, nom: 'Mohamed', poste: "developpeur", projet_affecte: 'NX DataHub'},
  {id: 14, nom: 'Amine', poste: "developpeur", projet_affecte: 'APV2'},
]

  

/**
 * @title Table with selection
 */

@Component({
  selector: 'app-collab-config',
  templateUrl: './collab-config.component.html',
  styleUrls: ['./collab-config.component.scss']
})
export class CollabConfigComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Collaborateurs>(ELEMENT_DATA);
  selection = new SelectionModel<Collaborateurs>(true, []);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
  }

}
