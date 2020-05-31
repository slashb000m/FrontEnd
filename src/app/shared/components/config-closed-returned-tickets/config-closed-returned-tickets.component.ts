import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-config-closed-returned-tickets',
  templateUrl: './config-closed-returned-tickets.component.html',
  styleUrls: ['./config-closed-returned-tickets.component.scss']
})
export class ConfigClosedReturnedTicketsComponent implements OnInit {
  myControl = new FormControl();
  options: User[] = [
    {name: 'Khalil Messadi'},
    {name: 'Sihem jouini'},
    {name: 'Ala raies'},
    {name: 'Fares kefi'},
    {name: 'Souha Ayachi'}
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

  constructor() { }

  

}
