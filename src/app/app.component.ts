import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hero_project';
  my_heroes: Hero[]=[];

  constructor(private heroservice: HeroService){}
  getmy_heroes(){
    this.heroservice.getHeroes().subscribe(data => {
      this.my_heroes=data;
    });
  }
 
  ngOnInit(){
    this.getmy_heroes();
}
}
