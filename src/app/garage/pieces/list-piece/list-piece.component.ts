import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface PieceType {
  nom: string;
  description: string;
  image: string;
  quantite: number
}

@Component({
  selector: 'app-list-piece',
  templateUrl: './list-piece.component.html',
  styleUrls: ['./list-piece.component.scss']
})

export class ListPieceComponent implements OnInit {

  @Input() pieces: PieceType[] = [];
  @Output() onEditPiece = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(idpiece: string): void {
    this.onEditPiece.emit(idpiece);
  }

  onDelete(idpiece: string): void {

  }

}
