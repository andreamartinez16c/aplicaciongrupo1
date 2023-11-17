import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/service.equipos';
import { Alumno } from 'src/models/alumno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // gruposDeAlumnos: string[][] = [];
  public alumnos!: Array<Alumno>

  constructor(private alumnosService: AlumnosService) {
    // this.gruposDeAlumnos = this.alumnosService.distribuirAlumnos();

    
    }
    
    ngOnInit(): void {
      this.alumnosService.getAlumnos().subscribe(response => {
        this.alumnos = response
        console.log(response)
      })
  }
}
