import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private apiUrl = `${environment.BASE_URL}/api/employees`; // 🔥 Change selon ton backend

  constructor(private http: HttpClient) { }

  // Ajouter un employé
  registerEmployee(employee: CreateEmployee): Observable<Employee> {
    return this.http.post<any>(`${this.apiUrl}/`, employee);
  }

  // Récupérer tous les employés
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/`);
  }

  // Récupérer un employé par son ID
  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour un employé
  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, employee);
  }

  // Supprimer un employé
  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
