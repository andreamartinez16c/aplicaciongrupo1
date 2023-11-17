import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService { 
    private apiUrl = 'https://apiejemplos.azurewebsites.net/api/Alumnos/FiltrarCurso/2023'
    constructor(private http: HttpClient) {}

    getAlumnos(): Observable<any> {
      return this.http.get(this.apiUrl)
  }
      
  distribuirAlumnos(): string[][] {
    const totalAlumnos = 25;
    const totalGrupos = 8;

    const grupos: string[][] = Array.from({ length: totalGrupos }, () => []);

    const alumnos: string[] = Array.from({ length: totalAlumnos }, (_, i) => `Alumno ${i + 1}`);

    // Distribuir alumnos en grupos
    for (let i = 0; i < totalAlumnos; i++) {
      let grupoIndex = Math.floor(Math.random() * totalGrupos);
      if (grupos[grupoIndex].length < 3) {
        grupos[grupoIndex].push(alumnos[i]);
      } else {
        if (grupos[totalGrupos - 1].length < 4) {
          grupos[totalGrupos - 1].push(alumnos[i]);
        } else {
          grupoIndex = Math.floor(Math.random() * (totalGrupos - 1));
          grupos[grupoIndex].push(alumnos[i]);
        }
      }
    }

    return grupos;
  }
}


