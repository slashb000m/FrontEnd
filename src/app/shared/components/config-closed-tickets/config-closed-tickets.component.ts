import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ConfigStatut} from 'src/app/classes/ConfigStatut';
import {ConfigSprint} from 'src/app/classes/ConfigSprint';
import { DataService } from 'src/app/data.service';
import { ConfigEpic } from 'src/app/classes/ConfigEpic';
import { ConfigDateDeb } from 'src/app/classes/ConfigDateDeb';
import { ConfigDateFin } from 'src/app/classes/ConfigDateFin';

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
  
  myControlSprintTicket = new FormControl();
  optionsSprintTicket: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  
  myControlEpicTicket = new FormControl();
  optionsEpicTicket: string[] = ["test","test2 ","test 3 "];
 

  myControl = new FormControl();
  options: User[] = [
    {name: 'Khalil Messadi'},
    {name: 'Sihem jouini'},
    {name: 'Ala raies'},
    {name: 'Fares kefi'},
    {name: 'Souha Ayachi'}
  ];




// Form POST API


message: any;


sprint: ConfigSprint=new ConfigSprint(1,0);


envoyerSprint()
{
  this.sprint.config_id=1;
  console.log(this.sprint)
  let resp=this.dataService.KpiConfigSprintTickets(this.sprint);
  resp.subscribe((data)=>this.message=data);

}



statut: ConfigStatut=new ConfigStatut(1,"");


envoyerStatut()
{  this.statut.config_id=1;
  console.log(this.statut)
  let resp=this.dataService.KpiConfigStatutTickets(this.statut);
  resp.subscribe((data)=>this.message=data);

}

epic: ConfigEpic=new ConfigEpic(1,"");


envoyerEpic()
{  this.epic.config_id=1;
  console.log(this.epic)
  let resp=this.dataService.KpiConfigEpicTickets(this.epic);
  resp.subscribe((data)=>this.message=data);

}

datedeb: ConfigDateDeb=new ConfigDateDeb(1,new Date(20,12,2020));


envoyerDateDeb()
{  this.datedeb.config_id=1;
  console.log(this.datedeb)
  let resp=this.dataService.KpiConfigDateDebTickets(this.datedeb);
  resp.subscribe((data)=>this.message=data);

}

datefin: ConfigDateFin=new ConfigDateFin(1,new Date(20,12,2020));


envoyerDateFin()
{  this.datefin.config_id=1;
  console.log(this.datefin)
  let resp=this.dataService.KpiConfigDateFintickets(this.datefin);
  resp.subscribe((data)=>this.message=data);

}
}



