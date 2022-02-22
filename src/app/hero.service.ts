import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Hero } from './model/hero';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes_api/';  // URL to web api

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);                 
    return throwError(error);
  }

  //Récupérer (GET) les heros du serveur
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  // Récupérer les héros (GET) par leurs id
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      catchError(this.handleError)
      );
  }


  /*/ajouter un héro
  addHero (hero: Hero): Observable<Hero> { 
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
}*/

  /*/modifier un héro
  updateHero (hero : Hero) : Observable<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put<Hero>(this.heroesUrl, hero).pipe(
    map(() => hero),
    catchError(this.handleError));
  }*/
 
  //supprimer un héro à l'aide de son id
  delete_hero(id: number): Observable<any> {
    return this.http.delete(this.heroesUrl + id);
  }

  //créer un héro
  createHero(hero: Hero): Observable<Hero> {
    hero.id = 0;
    return this.http.post<Hero>(this.heroesUrl, hero).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  //modifier un héro
  editHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl + hero.id, hero);
  }
 
}
