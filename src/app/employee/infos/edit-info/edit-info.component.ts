import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {
  @Input() employeeId!: string;
  
  employeeForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  currentImageUrl: string | null = null;
  isLoading = true; // for when we wait for the datas to load
  showPassword:boolean = false;
  
  
  togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
  }

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      firstname: [''],
      description: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      image: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.loadEmployeeData();
  }

  private loadEmployeeData() {
    if (this.employeeId) {
      this.isLoading = false;
      // Simulate API call to fetch employee data
    }
  }

  openFileInput() {
    document.getElementById('image')?.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.currentImageUrl = null; // Reset current image URL
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.employeeForm.valid) {
        const formData = new FormData();
        formData.append('nom', this.employeeForm.value.name);
        formData.append('prénoms', this.employeeForm.value.firstname);
        formData.append('bio', this.employeeForm.value.description);
        formData.append('email', this.employeeForm.value.email);
        formData.append('password', this.employeeForm.value.password);
        formData.append('salaire', this.employeeForm.value.salary);
        if (this.selectedFile) {
          formData.append('image', this.selectedFile);
        }
  
        console.log('Employé modifié(e):', this.employeeForm.value);
        alert('Employé modifié(e) avec succès ! 🎉');
  
        // Réinitialiser le formulaire
        this.resetForm();
      } else {
        alert('Veuillez remplir tous les champs correctement.');
      }
      
    }
  }

  onCancel() {
    this.resetForm();
  }

  private resetForm() {
    this.employeeForm.reset();
    this.selectedFile = null;
    this.imagePreview = null;
    const fileInput = document.getElementById('image') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  }

  get imageSource(): string | ArrayBuffer | null {
    return this.imagePreview || this.currentImageUrl;
  }
}