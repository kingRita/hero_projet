import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './model/hero';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes_api';  // URL to web api
  
  constructor(private http: HttpClient) { }

  //Récupérer (GET) les heros du serveur
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }


  // Récupérer les héros (GET) par leurs id
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  //ajouter un héro
  addHero (hero: Hero[]): Observable<Hero[]> { 
    return this.http.post<Hero[]>(this.heroesUrl, hero);
}


}
