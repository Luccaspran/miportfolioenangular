import { Component, OnInit } from '@angular/core';
import { DatosportfolioService } from '../servicios/datosportfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
// Inicializa variables de instancia para almacenar los datos con los que se trae el servicio
tituloeduca: string= '';
textoeduc: string='';
imgcolegio: string='';
imgseprogramar: string='';
imgunity: string='';
// Inyectar el servicio para tener acceso en la clase los Métodos
 constructor (private datosportfolioService: DatosportfolioService) { }

 ngOnInit(): void {
  // Esto es almacenar en la variable de instancia los datos recuperados por el servicio
  this.datosportfolioService.getDatos().subscribe(portfolio=>{
    console.log(portfolio);
    //definir informacion a mostrar
    this.tituloeduca=portfolio.tituloeduca;
    this.textoeduc=portfolio.textoeduc;
    this.imgcolegio=portfolio.imgcolegio;
    this.imgseprogramar=portfolio.imgseprogramar;
    this.imgunity=portfolio.imgunity;
  });
   
 }
}
