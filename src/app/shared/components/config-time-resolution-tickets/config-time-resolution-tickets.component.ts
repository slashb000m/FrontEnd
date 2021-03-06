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
import {ConfigVersion} from 'src/app/classes/ConfigVersion'
import { KpiConfig } from 'src/app/classes/KpiConfig';

import { getConfigNom } from 'src/app/classes/getConfigNom';
import { getConfigStatut } from 'src/app/classes/getConfigStatut';
import { getConfigModule } from 'src/app/classes/getConfigModule';
import { getConfigEpic } from 'src/app/classes/getConfigEpic';
import { getConfigVersion } from 'src/app/classes/getConfigVersion';

import { ConfigModule } from 'src/app/classes/ConfigModule';


export interface User {
  name: string;
}
@Component({
  selector: 'app-config-time-resolution-tickets',
  templateUrl: './config-time-resolution-tickets.component.html',
  styleUrls: ['./config-time-resolution-tickets.component.scss']
})
export class ConfigTimeResolutionTicketsComponent implements OnInit {
  config: KpiConfig;

  inputnom :getConfigNom[]
  inputstatut :getConfigStatut[]
  inputmodule :getConfigModule[]
  inputepic :getConfigEpic[]
  inputversion :getConfigVersion[]



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

      this.dataService.getConfig3()
      .subscribe(data => this.config = data);

      
    this.dataService.getConfigNom()
    .subscribe(data => this.inputnom = data);

    this.dataService.getConfigStatut()
    .subscribe(data => this.inputstatut = data);

    this.dataService.getConfigmodule()
    .subscribe(data => this.inputmodule = data);

    this.dataService.getConfigEpic()
    .subscribe(data => this.inputepic = data);

    this.dataService.getConfigVersion()
    .subscribe(data => this.inputversion = data);
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  
  myControlNom = new FormControl();
  optionsNom: string[] = ["Amine Lakhoua","peu importe","Mohamed El Raies","Souha Ayachi","Shiraz Bouaajin ","Feriel Khalil","Sourour Blel","	Walli Allah","Malik Hassen","Khalil Messadi","Syrine Ben Aallah","Saber Talbi","Sarra Dhalfaoui"];

  myControlModule = new FormControl();
  optionsModule: string[] = ["GUI","Import/Export","DQC",'peu importe'];

  myControlEtatTicket = new FormControl();
  optionsEtatTicket: string[] = ['Fermé', 'Retourné', 'En cours ','Attente Information','peu importe'];
  
  myControlVersion = new FormControl();
  optionsVersion: string[] = ['6.2-00', '6.1-00', '6.2-00a','6.1-00a','peu importe'];
  
  myControlEpic = new FormControl();
  optionsEpic: string[] = ['IBOR', 'Archive data from WS', 'Cloud: stabilization','peu importe'];

  myControlSprint = new FormControl();
  optionsSprint: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];


  

  constructor(private dataService: DataService) { }

  message: any;


  nom: ConfigNom=new ConfigNom(1,"");


version: ConfigVersion=new ConfigVersion(1,"");
  
module: ConfigModule=new ConfigModule(1,"");


envoyerModule()
{
  this.module.config_id=3;
  console.log(this.module)
  let resp=this.dataService.KpiConfigModuleTickets(this.module);
  resp.subscribe((data)=>this.message=data);
  location.reload();

}
envoyerNom()
{
  this.nom.config_id=3;
  console.log(this.nom)
  let resp=this.dataService.KpiConfigNomCollab(this.nom);
  resp.subscribe((data)=>this.message=data);
  location.reload();

}




epic: ConfigEpic=new ConfigEpic(1,"");

envoyerEpic()
{  this.epic.config_id=3;
  console.log(this.epic)
  let resp=this.dataService.KpiConfigEpicTickets(this.epic);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}


sprint: ConfigSprint=new ConfigSprint(1,1);

envoyerSprint()
{  this.sprint.config_id=3;
  console.log(this.sprint)
  let resp=this.dataService.KpiConfigSprintTickets(this.sprint);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}

datedeb: ConfigDateDeb=new ConfigDateDeb(1,new Date(20,12,2020));


envoyerDateDeb()
{  this.datedeb.config_id=3;
  console.log(this.datedeb)
  let resp=this.dataService.KpiConfigDateDebTickets(this.datedeb);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}

datefin: ConfigDateFin=new ConfigDateFin(1,new Date(20,12,2020));


envoyerDateFin()
{  this.datefin.config_id=3;
  console.log(this.datefin)
  let resp=this.dataService.KpiConfigDateFintickets(this.datefin);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}
envoyerVersion()
{
  this.version.config_id=3;
  console.log(this.version)
  let resp=this.dataService.KpiConfigVersion(this.version);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}



}
