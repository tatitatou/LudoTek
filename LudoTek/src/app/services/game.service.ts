import { Injectable } from '@angular/core';
import { game } from '../models/game.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private Url = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getGames(): Observable<game[]> {
    return this.http.get<game[]>(`${this.Url}/api/game`);
  }

  getGame(id: number): Observable<game> {
    return this.http.get<game>(`${this.Url}/api/game/${id}`);
  } 

}
