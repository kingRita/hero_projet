import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeroModif } from './ModifierHeroClass';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  public my_heroes: Hero[]=[];
  public my_hero : HeroModif = new HeroModif();

  //Nouveau formulaire modifier un héro
  UpdateHeroForm = new FormGroup({ });

  constructor( private heroservice: HeroService,
     private dialog : MatDialog,
     private formBuilder: FormBuilder){}


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

  //ouvre dialog pour pouvoir ajouter un héro
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'40%'
    }).afterClosed().subscribe(val=>{
        this.getmy_heroes();
    })
    }

  
  ngOnInit(){
    this.getmy_heroes();
    //champs formulaire modifier héro
    this.UpdateHeroForm = this.formBuilder.group({
      name: [''],
      title: [''],
      key: [''],
    });
}

////////////////////////Modifier un héro///////////////////////////////

  //met les valeurs du héro en question dans le formulaire
  openModal( hero: Hero){
    // /!\ récupère l'id du héro en question afin de bien utiliser la méthode put  /!\
    this.my_hero.id= hero.id ;

    this.UpdateHeroForm.controls['name'].setValue(hero.name);
    this.UpdateHeroForm.controls['title'].setValue(hero.title);
    this.UpdateHeroForm.controls['key'].setValue(hero.key);
  }
  
  //enregistre les valeurs
  setChange(){
    this.my_hero.name = this.UpdateHeroForm.value.name;
    this.my_hero.title = this.UpdateHeroForm.value.title;
    this.my_hero.key = this.UpdateHeroForm.value.key;

    this.heroservice.editHero(this.my_hero, this.my_hero.id).subscribe(
      res => {
        console.log(this.my_hero.id);
        this.UpdateHeroForm.reset();
        this.getmy_heroes();
      }
    )
  }


  }





