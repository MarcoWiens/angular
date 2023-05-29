import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { SharedService } from './shared.service';
import { MenuItem } from 'primeng/api'; 
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titles: MenuItem[];
  title = 'Tour of Heroes';
  title2 = 'Top Heroes';

  constructor(private router: Router, private sharedService: SharedService) { }
  openHeroes() {
    this.router.navigate(['/heroes']);
  }
  openDash() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.navigate(['/dashboard'])

    this.titles = [
      {
        label: 'Dashboard', routerLink: ['/dashboard']
      },
      {
        label: 'Heroes', routerLink: ['/heroes']
      }
    ];

  }





}





