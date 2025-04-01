import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  @Output() onDeletePiece = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onEdit(idpiece: string): void {
    this.onEditPiece.emit(idpiece);
  }

  onDelete(idpiece: string): void {
    this.onDeletePiece.emit(idpiece);
  }

  affectToReparation(idpiece: string): void {
    console.log("idpiece : ", idpiece);
    this.router.navigate(['/pieces/affect-reparation', idpiece]);
  }

}