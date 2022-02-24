import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';
import { columnDefsArray } from '../model/columnDefs';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  //arrHeroes: Hero[]=[];
  
  public arrHeroes: Array<Hero> = [];
  private heroesUrl = 'api/heroes_api/';
  
  constructor(public heroservice: HeroService,
    private http: HttpClient) {
    this.rowData = this.http.get<any[]>(this.heroesUrl);
   }

  ngOnInit(): void {
  }

  columnDefs: ColDef[] = columnDefsArray();
  rowData: Observable<any[]> | undefined;

}
