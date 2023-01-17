import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { BannerComponent } from './banner/banner.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

import { HardsoftskillsComponent } from './hardsoftskills/hardsoftskills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ErrorComponent } from './error/error.component';
import { PanelComponent } from './panel/panel.component';
import { PanelredesComponent } from './panel/panelredes/panelredes.component';

import { PanelexperienciaComponent } from './panel/panelexperiencia/panelexperiencia.component';
import { PanelhardComponent } from './panel/panelhard/panelhard.component';
import { PaneleducacionComponent } from './panel/paneleducacion/paneleducacion.component';
import { PanelacercademiComponent } from './panel/panelacercademi/panelacercademi.component';
import { PanelbannerComponent } from './panel/panelbanner/panelbanner.component';
import { PanelproyectosComponent } from './panel/panelproyectos/panelproyectos.component';
import { EducacionComponent } from './educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    BannerComponent,
    SobremiComponent,
    ExperienciaComponent,
    
    HardsoftskillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    ErrorComponent,
    PanelComponent,
    PanelredesComponent,
    
    PanelexperienciaComponent,
    PanelhardComponent,
    PaneleducacionComponent,
    PanelacercademiComponent,
    PanelbannerComponent,
    PanelproyectosComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
