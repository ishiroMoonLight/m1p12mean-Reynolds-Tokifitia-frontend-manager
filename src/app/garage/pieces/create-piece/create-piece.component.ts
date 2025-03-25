import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-piece',
  templateUrl: './create-piece.component.html',
  styleUrls: ['./create-piece.component.scss']
})
export class CreatePieceComponent implements OnInit {

  @Input() piece!: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor() { }

  openFileInput() {
    document.getElementById('image')?.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.piece.patchValue({ image: this.imagePreview }); // 🔥 Met à jour le formControl avec la base64
        this.piece.get('image')?.updateValueAndValidity();
      };
      reader.readAsDataURL(this.selectedFile); // 🔥 Convertit en base64
    }
  }

  ngOnInit(): void {
    console.log('piece form : ', this.piece);
  }

  onSubmit() {
    console.log("piece to submit : ", this.piece);

  }

}
