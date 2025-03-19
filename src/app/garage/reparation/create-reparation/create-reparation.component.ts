import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-reparation',
  templateUrl: './create-reparation.component.html',
  styleUrls: ['./create-reparation.component.scss']
})
export class CreateReparationComponent implements OnInit {

  reparationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reparationForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      duree: ['', [Validators.required, Validators.pattern('^[0-9]+[h]$')]], // Ex: "3h"
      prix: [null, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.reparationForm.valid) {
      console.log('Réparation ajoutée:', this.reparationForm.value);
      this.reparationForm.reset();
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }

}
