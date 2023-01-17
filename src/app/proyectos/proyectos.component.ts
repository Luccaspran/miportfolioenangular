import { Component, OnInit } from '@angular/core';
import { DatosportfolioService } from '../servicios/datosportfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
// Inicializa variables de instancia para almacenar los datos con los que se trae el servicio
tituloproy: string= '';
textoproyec: string='';


// Inyectar el servicio para tener acceso en la clase los Métodos
 constructor (private datosportfolioService: DatosportfolioService) { }

 ngOnInit(): void {
  // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.datosportfolioService.getDatos().subscribe(portfolio=>{
    console.log(portfolio);
    //definir informacion a mostrar
    this.tituloproy=portfolio.tituloproy;
    this.textoproyec=portfolio.textoproyec;
  });
   
 }
}
