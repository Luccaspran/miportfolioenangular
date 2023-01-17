import { Injectable } from '@angular/core';
// Esto es para suscribirse y que se reciba de forma asíncrona
import { Observable } from 'rxjs';
// Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatosportfolioService {
// Primer http se llama alias
  constructor(private http:HttpClient) { }

// Metodo observable que devuelve los datos
getDatos():Observable<any>{
  // Se llama al JSON con su path -ruta- o se puede poner una URL que traiga datos de un JSON online
  return this.http.get('./assets/JSON/miportfolioenangular.json');
} 
}
