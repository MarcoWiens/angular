import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../shared.service';
import { Observable, catchError, tap } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute, 
    private heroService: SharedService,
    private location: Location){ }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getHero();
    }

    getHero(): void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    goBack(): void{
      this.location.back()
    }

    save(): void {
      if (this.hero) {
        this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
      }
    }

    

}
