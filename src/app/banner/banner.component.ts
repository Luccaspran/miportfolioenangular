import { Component, OnInit } from '@angular/core';
import { DatosportfolioService } from '../servicios/datosportfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
// Inicializa variables de instancia para almacenar los datos con los que se trae el servicio
img1: string='';
tituloimg: string='';
texto: string='';
img2: string='';
tituloimg2: string='';
texto2: string='';
img3: string='';
tituloimg3: string='';
texto3: string='';

// Inyectar el servicio para tener acceso en la clase los Métodos
 constructor (private datosportfolioService: DatosportfolioService) { }

 ngOnInit(): void {
  // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.datosportfolioService.getDatos().subscribe(portfolio=>{
    console.log(portfolio);
    //definir informacion a mostrar
    this.img1=portfolio.img1;
    this.tituloimg=portfolio.tituloimg;
    this.texto=portfolio.texto
    this.img2=portfolio.img2;
    this.tituloimg2=portfolio.tituloimg2;
    this.texto2=portfolio.texto2;
    this.img3=portfolio.img3;
    this.tituloimg3=portfolio.tituloimg3;
    this.texto3=portfolio.texto3;
  });
   
 }
}
