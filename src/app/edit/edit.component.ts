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
  
  public my_heroes: Hero[]=[];

  //un héro vide pour addHero()
  hero = {
    name: '',
    id: 0,
    title : '',
    key : ''
  }
  edit = true;
  add = false;

  constructor( private heroservice: HeroService){}

  //récupère tous les héros
  getmy_heroes(){
    this.heroservice.getHeroes().subscribe(data => {
      this.my_heroes=data;
    });
  }

  /*/supprimer un héro
  deletemy_hero(id : number){
    this.heroservice.delete_hero(id).subscribe(data => {
      this.getmy_heroes();
    });
  }
*/
  removeHero(hero : Hero) {
    const id = hero.id;
    console.log(hero);
    this.heroservice.delete_hero(id).subscribe((hero: any) => console.log(hero + "suppression du héro ok"));
    this.getmy_heroes();
  }

  /*
  //modifier un héro
  editmy_hero(){
    this.heroservice.getHero(this.idtoUpdate).subscribe(data => {
      this.user = data;
      this.user.age = 'Updated Age';
      this.heroservice.updateUser(this.user).subscribe(data1 => {
        this.getUsers();
      });

  }*/

  //ajouter un héro
  addHero() {
    const data = {
      name: this.hero.name,
      id: this.hero.id,
      title: this.hero.title,
      key: this.hero.key
    };
    this.heroservice.createHero(data).subscribe(response => {
      console.log(response)
      this.getmy_heroes();
    });
  }

//modifier un héro
  setHeroEdit(hero : Hero) {
    this.hero.name = hero.name;
    this.hero.id = hero.id;
    this.edit = false;
    this.add = true;
  }

  updateHero(){
    this.heroservice.editHero(this.hero, this.hero.id).subscribe(response => console.log(response));
    this.getmy_heroes()
    this.resetValues()
  }

  //met les valeurs à 0
  resetValues() {
    this.hero.name = "";
    this.hero.id = 0;
    this.edit = true;
    this.add = false;
  }

 
  ngOnInit(){
    this.getmy_heroes();
}


}


