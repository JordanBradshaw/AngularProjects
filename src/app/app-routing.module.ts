import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
