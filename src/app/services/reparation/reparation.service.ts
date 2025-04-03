import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  private apiUrl = `${environment.BASE_URL}/api/reparations`; // 🔥 Change selon ton backend

  constructor(private http: HttpClient) { }

  // Méthode pour créer une réparation
  createReparation(reparationData: CreateReparation): Observable<any> {
    console.log('reparationData : ', reparationData);

    return this.http.post<any>(`${this.apiUrl}`, reparationData);
  }

  // Récupérer toutes les réparations
  getReparations(): Observable<Reparation[]> {
    return this.http.get<Reparation[]>(this.apiUrl);
  }

  // Supprimer une réparation
  deleteReparation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
