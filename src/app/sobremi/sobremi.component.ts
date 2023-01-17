import { Component, OnInit } from '@angular/core';
import { DatosportfolioService } from '../servicios/datosportfolio.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
// Inicializa variables de instancia para almacenar los datos con los que se trae el servicio
nombre: string= '';
apellido: string='';
tituloacerca: string='';
sobremi: string='';

// Inyectar el servicio para tener acceso en la clase los Métodos
 constructor (private datosportfolioService: DatosportfolioService) { }

 ngOnInit(): void {
  // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.datosportfolioService.getDatos().subscribe(portfolio=>{
    console.log(portfolio);
    //definir informacion a mostrar
    this.nombre=portfolio.nombre;
    this.apellido=portfolio.apellido;
    this.tituloacerca=portfolio.tituloacerca;
    this.sobremi=portfolio.sobremi;
  });
   
 }
}
