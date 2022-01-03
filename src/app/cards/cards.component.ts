import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
import { Card } from '../models/card.model';
import { CardsService } from './cards.service';


@Component({
  selector: 'app-cards-component',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],

})
export class CardsComponent implements OnInit {
  title = "List of cards";
  cards!: Card[];
  filteredCards!: Card[];

  constructor(private service: CardsService) {}

  ngOnInit(): void {
    this.service.getCards().subscribe((fetchedCards)=> {
      this.cards = fetchedCards;
      this.filteredCards = fetchedCards;
    });
  }
}



const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


@Component({
  selector:'app-typeahead-component',
  template:`
  <label for="cards-typeahead">Search for a state:</label>
  <input id="card-typeahead" type="text" class="form-control" [(ngModel)]="model" [ngbTypeahead]="search" [inputFormatter]="formatter" [resultFormatter]="formatter"/>
  <hr>
  <pre>Model: {{ model | json }}</pre>`,
  styles: [`.form-control { width: 300px; }`]
})
export class TypeaheadComponent {
  @Input()
  cards!: Card[];

  public model!: Card;

  formatter = (result: Card) => result.name;

  search: OperatorFunction<string, readonly Card[]> = (search$: Observable<string>) =>
    search$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.cards.filter((v : Card) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)),
      //reduce((accum,current,i) => {if (!accum.some((item) => item[i].name === current[i].name) {accum.push(current);} return accum;}, []);)
    )

    /*.pipe(
      map((card, index) => card[index].name)
    )
*/
      //: this.cards$.pipe(map((cards) => cards.filter(card => card.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)))))
}
