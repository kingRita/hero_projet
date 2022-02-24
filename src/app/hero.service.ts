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

  //supprimer un héro à l'aide de son id
  delete_hero(id: number): Observable<any> {
    return this.http.delete(this.heroesUrl + id);
  }

  //ajouter un héro
  createHero(data : any){
    return this.http.post<any>(this.heroesUrl , data)
  }


  //modifier un héro (put method)
  editHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero);
  }
 
  

}
