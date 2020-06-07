import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import {ConfigVersion} from 'src/app/classes/ConfigVersion';
import {ConfigSprint} from 'src/app/classes/ConfigSprint';
import { ConfigEpic } from 'src/app/classes/ConfigEpic';
import { ConfigDateDeb } from 'src/app/classes/ConfigDateDeb';
import { ConfigDateFin } from 'src/app/classes/ConfigDateFin';
import { ConfigNom } from 'src/app/classes/ConfigNom';
import { KpiConfig } from 'src/app/classes/KpiConfig';

export interface User {
  name: string;
}

@Component({
  selector: 'app-config-closed-returned-tickets',
  templateUrl: './config-closed-returned-tickets.component.html',
  styleUrls: ['./config-closed-returned-tickets.component.scss']
})
export class ConfigClosedReturnedTicketsComponent implements OnInit {

  config: KpiConfig;

  myControl = new FormControl();
  options: User[] = [
    {name: 'Khalil Messadi'},
    {name: 'Sihem jouini'},
    {name: 'Ala raies'},
    {name: 'Fares kefi'},
    {name: 'Souha Ayachi'}
  ];
  myControlEpic = new FormControl();
  optionsEpic: string[] =  ['peu importe','IBOR', 'Archive data from WS', 'Cloud: stabilization'];

  myControlSprint = new FormControl();
  optionsSprint: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

  myControlVersion = new FormControl();
  optionsVersion:  string[] = ['peu importe','6.2-00', '6.1-00', '6.2-00a','6.1-00a'];

  myControlNom = new FormControl();
  optionsNom: string[] = ["peu importe","Mohamed El Raies","Souha Ayachi","Shiraz Bouaajin ","Feriel Khalil","Sourour Blel","	Walli Allah","Malik Hassen","Amine Lakhoua","Syrine Ben Aallah","Saber Talbi","Sarra Dhalfaoui"];
  
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

      this.dataService.getConfig2()
      .subscribe(data => this.config = data);
    

      
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
  location.reload();
}





epic: ConfigEpic=new ConfigEpic(1,"");

envoyerEpic()
{  this.epic.config_id=2;
  console.log(this.epic)
  let resp=this.dataService.KpiConfigEpicTickets(this.epic);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}


sprint: ConfigSprint=new ConfigSprint(1,1);

envoyerSprint()
{  this.sprint.config_id=2;
  console.log(this.sprint)
  let resp=this.dataService.KpiConfigSprintTickets(this.sprint);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}

datedeb: ConfigDateDeb=new ConfigDateDeb(1,new Date(20,12,2020));


envoyerDateDeb()
{  this.datedeb.config_id=2;
  console.log(this.datedeb)
  let resp=this.dataService.KpiConfigDateDebTickets(this.datedeb);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}

datefin: ConfigDateFin=new ConfigDateFin(1,new Date(20,12,2020));


envoyerDateFin()
{  this.datefin.config_id=2;
  console.log(this.datefin)
  let resp=this.dataService.KpiConfigDateFintickets(this.datefin);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}
  
version: ConfigVersion=new ConfigVersion(1,"");
envoyerVersion()
{
  this.version.config_id=2;
  console.log(this.version)
  let resp=this.dataService.KpiConfigVersion(this.version);
  resp.subscribe((data)=>this.message=data);
  location.reload();
}


}
