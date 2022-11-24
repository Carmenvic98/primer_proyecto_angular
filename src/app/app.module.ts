import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { DesempenoComponent } from './desempeno/desempeno.component';
import { HeroesComponent } from './heroes/heroes.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrigthComponent } from './copyrigth/copyrigth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    DesempenoComponent,
    HeroesComponent,
    EtiquetasComponent,
    CarruselComponent,
    FormularioComponent,
    FooterComponent,
    CopyrigthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
