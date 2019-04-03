import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Position } from './data/Positions';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>('http://app-web422.herokuapp.com/positions');
  }

  savePosition(position: Position): Observable<any>{
    return this.http.put<any>("http://app-web422.herokuapp.com/position/" + position._id, position);
  }

  getPosition(id: String): Observable<Position[]> {
    // console.log("getPosition inside position service ts");
    return this.http.get<Position[]>("http://app-web422.herokuapp.com/position/" + id);
  }
}