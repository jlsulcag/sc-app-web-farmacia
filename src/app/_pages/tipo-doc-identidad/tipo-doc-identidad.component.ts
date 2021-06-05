import { TipoDocIdentidad } from './../../_model/TipoDocIdentidad';
import { ITipoDocIdentidad } from './../../_interface/ITipoDocIdentidad';
import { TipoDocIdentidadService } from './../../_services/tipo-doc-identidad.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { DlgTipoDocIdentidadComponent } from './dlg-tipo-doc-identidad/dlg-tipo-doc-identidad.component';

@Component({
  selector: 'app-tipo-doc-identidad',
  templateUrl: './tipo-doc-identidad.component.html',
  styleUrls: ['./tipo-doc-identidad.component.css']
})
export class TipoDocIdentidadComponent implements OnInit {

  listDocs: TipoDocIdentidad[];
  constructor(
    private tipoDocIdentidadService: TipoDocIdentidadService,
    private modalService: NgbModal,
    alertConfig: NgbAlertConfig
  ) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

  ngOnInit(): void {
    this.listar2();
  }

  listar() {
    this.tipoDocIdentidadService.listar().subscribe(data => {
      console.log(data);
    });
  }

  listar2() {
    this.tipoDocIdentidadService.listar().subscribe((responseData: ITipoDocIdentidad) => {
      console.log(responseData.data);
      this.listDocs = responseData.data;
    });
  }

  openDialogCreate() {
    console.log('Abrir  dialogo');
    const modalRef = this.modalService.open(DlgTipoDocIdentidadComponent);
  }

}
