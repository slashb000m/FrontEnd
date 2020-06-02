import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ConfigStatut} from 'src/app/classes/ConfigStatut';
import {ConfigSprint} from 'src/app/classes/ConfigSprint';
import { DataService } from 'src/app/data.service';

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
  
 

  myControl = new FormControl();
  options: User[] = [
    {name: 'Khalil Messadi'},
    {name: 'Sihem jouini'},
    {name: 'Ala raies'},
    {name: 'Fares kefi'},
    {name: 'Souha Ayachi'}
  ];
  filteredOptions: Observable<User[]>;

  constructor(private dataService: DataService) { }

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
  optionsEtatTicket: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];


// Form POST API





sprint: ConfigSprint=new ConfigSprint(1,0);
messagesprint: any;

envoyerSprint()
{
  console.log(this.sprint)
  let resp=this.dataService.KpiConfigSprint(this.sprint);
  resp.subscribe((data)=>this.messagesprint=data);

}




statut: ConfigStatut=new ConfigStatut(1,"");
messagestatut: any;

envoyerStatut()
{
  console.log(this.statut)
  let resp=this.dataService.KpiConfigStatut(this.statut);
  resp.subscribe((data)=>this.messagestatut=data);

}
}



