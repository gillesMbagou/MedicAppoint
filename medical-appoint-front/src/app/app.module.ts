import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MedecinGestionModule } from './modules/module-medecin/medecin-gestion/medecin-gestion.module';
import { MedecinListComponent } from './modules/module-medecin/component/medecin-list/medecin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MedecinListComponent
  ],
  imports: [
    BrowserModule,
    MedecinGestionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MedecinListComponent],
  entryComponents: [MedecinListComponent]
})
export class AppModule { }
