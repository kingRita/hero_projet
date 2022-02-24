import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { max } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  AddHeroForm = new FormGroup({ });
  public my_heroes: Hero[]=[];

  constructor(private formBuilder: FormBuilder,
               private heroservice : HeroService,
               private dialogRef : MatDialogRef<DialogComponent>,) {}

  ngOnInit(): void {
    this.AddHeroForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      title: ['', Validators.required],
      key: ['', Validators.required],
    })
  }



  //Add Hero
  ajouterHero(){
    console.log(this.AddHeroForm.value);
      if(this.AddHeroForm.valid){
        this.heroservice.createHero(this.AddHeroForm.value).subscribe({
          next:(res)=>{
            alert("Le Héro a bien été ajouté !")
            this.AddHeroForm.reset();
            this.dialogRef.close();         },
          error:()=>{
            alert("Erreur...")
          }
        })
      
    }
    } 


  //Update Hero
  UpdateHero(){
    console.log(this.AddHeroForm.value);
    if(this.AddHeroForm.valid){
      this.heroservice.editHero(this.AddHeroForm.value).subscribe({
        next:(res)=>{
          console.log(this.AddHeroForm.value);
          alert("Le Héro a bien été modifié!")
          this.AddHeroForm.reset();
          this.dialogRef.close();         },
        error:()=>{
          alert("Erreur...")
        }
      })
    }
}
}
