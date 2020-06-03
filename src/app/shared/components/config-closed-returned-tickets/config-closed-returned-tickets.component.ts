import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import {ConfigStatut} from 'src/app/classes/ConfigStatut';
import {ConfigSprint} from 'src/app/classes/ConfigSprint';
import { ConfigEpic } from 'src/app/classes/ConfigEpic';
import { ConfigDateDeb } from 'src/app/classes/ConfigDateDeb';
import { ConfigDateFin } from 'src/app/classes/ConfigDateFin';
import { ConfigNom } from 'src/app/classes/ConfigNom';

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
  myControlEpic = new FormControl();
  optionsEpic: string[] = ['epic1', 'epic16', 'epic12','epic3'];

  myControlSprint = new FormControl();
  optionsSprint: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

  myControlVersion = new FormControl();
  optionsVersion: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  
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
  


  constructor(private dataService: DataService) { }

  message: any;


  nom: ConfigNom=new ConfigNom(1,"");
  
envoyerNom()
{
  this.nom.config_id=2;
  console.log(this.nom)
  let resp=this.dataService.KpiConfigNomCollab(this.nom);
  resp.subscribe((data)=>this.message=data);

}





epic: ConfigEpic=new ConfigEpic(1,"");

envoyerEpic()
{  this.epic.config_id=2;
  console.log(this.epic)
  let resp=this.dataService.KpiConfigEpicTickets(this.epic);
  resp.subscribe((data)=>this.message=data);

}


sprint: ConfigSprint=new ConfigSprint(1,1);

envoyerSprint()
{  this.sprint.config_id=2;
  console.log(this.sprint)
  let resp=this.dataService.KpiConfigEpicTickets(this.epic);
  resp.subscribe((data)=>this.message=data);

}

datedeb: ConfigDateDeb=new ConfigDateDeb(1,new Date(20,12,2020));


envoyerDateDeb()
{  this.datedeb.config_id=2;
  console.log(this.datedeb)
  let resp=this.dataService.KpiConfigDateDebTickets(this.datedeb);
  resp.subscribe((data)=>this.message=data);

}

datefin: ConfigDateFin=new ConfigDateFin(1,new Date(20,12,2020));


envoyerDateFin()
{  this.datefin.config_id=2;
  console.log(this.datefin)
  let resp=this.dataService.KpiConfigDateFintickets(this.datefin);
  resp.subscribe((data)=>this.message=data);

}
  

}
