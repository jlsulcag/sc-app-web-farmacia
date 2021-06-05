import { TipoDocIdentidadComponent } from './_pages/tipo-doc-identidad/tipo-doc-identidad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DlgTipoDocIdentidadComponent } from './_pages/tipo-doc-identidad/dlg-tipo-doc-identidad/dlg-tipo-doc-identidad.component';


const routes: Routes = [
  {
    path: '',
    component: TipoDocIdentidadComponent
  },
  {
    path: 'tipodocidentidad/list',
    component: TipoDocIdentidadComponent
  },
  {
    path: 'tipodocidentidad/registro',
    component: DlgTipoDocIdentidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
