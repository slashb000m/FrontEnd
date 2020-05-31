import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}
@Component({
  selector: 'app-config-tickets-with-priority',
  templateUrl: './config-tickets-with-priority.component.html',
  styleUrls: ['./config-tickets-with-priority.component.scss']
})
export class ConfigTicketsWithPriorityComponent implements OnInit {

  constructor() { }

  myControl = new FormControl();
  options: User[] = [
    {name: 'NX GP3'},
    {name: 'NX DataHub'},
    {name: 'NX Complience'}
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  
  myControlEtatTicket = new FormControl();
  optionsEtatTicket: string[] = ['Fermé', 'Retourné', 'En cours ','Attente Information'];

}
