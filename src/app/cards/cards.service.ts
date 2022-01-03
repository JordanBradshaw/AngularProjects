import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "../models/card.model";

@Injectable({
  providedIn: "root",
})
export class CardsService{
    //private url = "http://localhost:3000/cards";
    private url = "api/cards";
    constructor(private _http: HttpClient){
    }
    getCards(): Observable<Card[]>{
        return this._http.get<Card[]>(this.url)
        .pipe(
        );
    }

}
