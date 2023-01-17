import { Component, OnInit } from '@angular/core';
import { DatosportfolioService } from '../servicios/datosportfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// Inicializa variables de instancia para almacenar los datos con los que se trae el servicio
redes: any;
logoarg: string='';
// Inyectar el servicio para tener acceso en la clase los Métodos
 constructor (private datosportfolioService: DatosportfolioService) { }

 ngOnInit(): void {
  // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.datosportfolioService.getDatos().subscribe(portfolio=>{
    console.log(portfolio);
    //definir informacion a mostrar
    this.redes=portfolio.redes;
    this.logoarg=portfolio.logoarg;
  });
   
 }
}
