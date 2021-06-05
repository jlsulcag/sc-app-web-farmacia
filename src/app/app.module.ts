import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TipoDocIdentidadComponent } from './_pages/tipo-doc-identidad/tipo-doc-identidad.component';
import { TipoDocComprobanteComponent } from './_pages/tipo-doc-comprobante/tipo-doc-comprobante.component';
import { DlgTipoDocIdentidadComponent } from './_pages/tipo-doc-identidad/dlg-tipo-doc-identidad/dlg-tipo-doc-identidad.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './_pages/alert/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoDocIdentidadComponent,
    TipoDocComprobanteComponent,
    DlgTipoDocIdentidadComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, /*Habilita  la caracteristica de formularios reactivos*/
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
