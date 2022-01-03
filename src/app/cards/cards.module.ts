import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../card/card.component';
import { Card } from '../models/card.model';
import { CardsComponent, TypeaheadComponent } from './cards.component';
import { CardsService } from './cards.service';

@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    TypeaheadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    CardsComponent,
    CardComponent,
    TypeaheadComponent,
  ],
  providers: [
    CardsService,
  ],
  bootstrap: [Card],
})
export class CardsModule {
}
