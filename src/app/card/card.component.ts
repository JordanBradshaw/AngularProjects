import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  })
export class CardComponent {
  @Input()
  card!: Card;
  constructor(private modalService: NgbModal){}

  clickEvent(){
    const modalRef = this.modalService.open(CardModal,{size:'lg'});
    modalRef.componentInstance.card = this.card;
  }
}

@Component({
  selector: 'app-card-modal',
  templateUrl: './card.modal.html',
  styleUrls: ['./card.component.css'],
})
export class CardModal{
  @Input()
  card!: Card;
  constructor(public activeModal: NgbActiveModal) {}
}
