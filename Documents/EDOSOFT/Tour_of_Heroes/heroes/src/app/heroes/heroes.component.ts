import { Component } from '@angular/core';
import { Hero } from '../hero';
import { SharedService } from '../shared.service';
import { MessageService } from '../message.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = [];
  

  selectedhero: Hero; 

 

  constructor(private heroService: SharedService, private messageService: MessageService){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }


  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void{
    name = name.trim();
    if (!name){ return; }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {this.heroes.push(hero);});
  }

  delete(hero:Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  
}
