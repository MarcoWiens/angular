import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Hero } from '../hero';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  heroes: Hero[] = [];
  title1 =  "Top Heroes";

  constructor(private router: Router, private heroService: SharedService) {  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }


  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  openHeroes() {
    this.router.navigate(['/heroes']);
  }
  openDash() {
    this.router.navigate(['/dashboard']);
  }

}
