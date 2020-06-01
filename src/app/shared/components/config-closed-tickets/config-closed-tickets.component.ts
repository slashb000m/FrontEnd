import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'

export interface User {
  name: string;
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-config-closed-tickets',
  templateUrl: './config-closed-tickets.component.html',
  styleUrls: ['./config-closed-tickets.component.scss']
})
export class ConfigClosedTicketsComponent implements OnInit {

  nom_collab: string;

constructor(private http:HttpClient){}




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

}
