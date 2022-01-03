import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cards = [
      { _id: 11, name: 'Pikachu', genre: 'Pokemon', count: 1 },
      { _id: 12, name: 'Charmander', genre: 'Pokemon', count: 1 },
      { _id: 13, name: 'Squirtle', genre: 'Pokemon', count: 1 },
      { _id: 14, name: 'Sammy Sosa', genre: 'Baseball', count: 1 },
      { _id: 15, name: 'Babe Ruth', genre: 'Baseball', count: 1 },
      { _id: 16, name: 'Tim Teebow', genre: 'Football', count: 1 },
      { _id: 17, name: 'John Elway', genre: 'Football', count: 1 },
      { _id: 18, name: 'Marshawn Lynch', genre: 'Football', count: 1 },
      { _id: 19, name: 'Nino', genre: 'Soccer', count: 1 },
      { _id: 20, name: 'Guapo', genre: 'Soccer', count: 1 },
      { _id: 11, name: 'Pikachu', genre: 'Pokemon', count: 1 },
      { _id: 12, name: 'Charmander', genre: 'Pokemon', count: 1 },
      { _id: 13, name: 'Squirtle', genre: 'Pokemon', count: 1 },
      { _id: 14, name: 'Sammy Sosa', genre: 'Baseball', count: 1 },
      { _id: 15, name: 'Babe Ruth', genre: 'Baseball', count: 1 },
      { _id: 16, name: 'Tim Teebow', genre: 'Football', count: 1 },
      { _id: 17, name: 'John Elway', genre: 'Football', count: 1 },
      { _id: 18, name: 'Marshawn Lynch', genre: 'Football', count: 1 },
      { _id: 19, name: 'Nino', genre: 'Soccer', count: 1 },
      { _id: 20, name: 'Guapo', genre: 'Soccer', count: 1 },
      { _id: 11, name: 'Pikachu', genre: 'Pokemon', count: 1 },
      { _id: 12, name: 'Charmander', genre: 'Pokemon', count: 1 },
      { _id: 13, name: 'Squirtle', genre: 'Pokemon', count: 1 },
      { _id: 14, name: 'Sammy Sosa', genre: 'Baseball', count: 1 },
      { _id: 15, name: 'Babe Ruth', genre: 'Baseball', count: 1 },
      { _id: 16, name: 'Tim Teebow', genre: 'Football', count: 1 },
      { _id: 17, name: 'John Elway', genre: 'Football', count: 1 },
      { _id: 18, name: 'Marshawn Lynch', genre: 'Football', count: 1 },
      { _id: 19, name: 'Nino', genre: 'Soccer', count: 1 },
      { _id: 20, name: 'Guapo', genre: 'Soccer', count: 1 }
    ];
    const users = [
      { username: 'Administrator', password: '123' }
    ];
    return {cards,users};
  }

  genId(cards: Model.Card[]): number {
    return cards.length > 0 ? Math.max(...cards.map(card => card._id)) + 1 : 11;
  }
  constructor() { }
}
