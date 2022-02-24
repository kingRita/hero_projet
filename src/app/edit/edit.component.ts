import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';
import { max, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  public my_heroes: Hero[]=[];

  constructor( private heroservice: HeroService,
    private dialog : MatDialog){}

  //récupère tous les héros
  getmy_heroes(){
    this.heroservice.getHeroes().subscribe(data => {
      this.my_heroes=data;
    });
  }    
  

  //supprime un héro
  removeHero(hero : Hero) {
    const id = hero.id;
    console.log(hero);
    this.heroservice.delete_hero(id).subscribe((hero: any) => console.log(hero + "suppression du héro ok"));
    this.getmy_heroes();
  }

  //ouvre le dialog pour pouvoir ajouter un héro
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'40%'
    }).afterClosed().subscribe(val=>{
        this.getmy_heroes();
    })
    }
  
 
  ngOnInit(){
    this.getmy_heroes();

}


}


