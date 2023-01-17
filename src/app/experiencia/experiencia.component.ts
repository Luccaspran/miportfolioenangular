import { Component, OnInit } from '@angular/core';
import { DatosportfolioService } from '../servicios/datosportfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
// Inicializa variables de instancia para almacenar los datos con los que se trae el servicio
tituloexperiencia: string= '';
trabajo: string='';
descripcion: string='';
descripcion2: string='';
imgkiosco: string='';

// Inyectar el servicio para tener acceso en la clase los Métodos
constructor (private datosportfolioService: DatosportfolioService) { }

ngOnInit(): void {
 // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
 this.datosportfolioService.getDatos().subscribe(portfolio=>{
   console.log(portfolio);
   //definir informacion a mostrar
   this.tituloexperiencia=portfolio.tituloexperiencia;
   this.trabajo=portfolio.trabajo;
   this.descripcion=portfolio.descripcion;
   this.descripcion2=portfolio.descripcion2;
   this.imgkiosco=portfolio.imgkiosco;
 });
  
}
}
