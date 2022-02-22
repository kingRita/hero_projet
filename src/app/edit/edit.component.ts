import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  my_heroes: Hero[]=[];

  constructor(private heroservice: HeroService){}

  //récupère tous les héros
  getmy_heroes(){
    this.heroservice.getHeroes().subscribe(data => {
      this.my_heroes=data;
    });
  }

 
  ngOnInit(){
    this.getmy_heroes();
}
}
