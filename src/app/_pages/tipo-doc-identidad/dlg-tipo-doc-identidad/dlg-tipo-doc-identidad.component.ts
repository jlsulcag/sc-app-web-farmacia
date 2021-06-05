import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITipoDocIdentidad } from './../../../_interface/ITipoDocIdentidad';
import { TipoDocIdentidadService } from './../../../_services/tipo-doc-identidad.service';
import { TipoDocIdentidad } from './../../../_model/TipoDocIdentidad';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dlg-tipo-doc-identidad',
  templateUrl: './dlg-tipo-doc-identidad.component.html',
  styleUrls: ['./dlg-tipo-doc-identidad.component.css']
})
export class DlgTipoDocIdentidadComponent implements OnInit {

  formDialog : FormGroup;
  tipoDocIdentidad : TipoDocIdentidad;
  alert : boolean;

  //Variable operacion que se va a realizar Nuevo = 1 y Editar = 2
  op : Number;

  constructor(
    private formBuilder : FormBuilder,
    private tipoDocIdentidadService : TipoDocIdentidadService,
    public activeModal : NgbActiveModal 
     
    ) { }

  ngOnInit(): void {
    this.formDialog = this.formBuilder.group({
    'id' : new FormControl(0),
    'codigoSunat' : ['', [Validators.required]],
    'descripcion' : [''],
    'abreviatura' : ['']
    }  
    );
  }

  OnSubmit(){
    console.log('Registrando...')
    //const tipoDoc : TipoDocIdentidad = new TipoDocIdentidad();
    this.tipoDocIdentidad = new TipoDocIdentidad();
    this.tipoDocIdentidad.codigoSunat = this.formDialog.controls.codigoSunat.value;
    this.tipoDocIdentidad.descripcion = this.formDialog.controls.descripcion.value;
    this.tipoDocIdentidad.abreviatura = this.formDialog.controls.abreviatura.value;
    this.tipoDocIdentidad.estado = '1';

    this.alert = true;
    this.tipoDocIdentidadService.registrar(this.tipoDocIdentidad).subscribe((response : ITipoDocIdentidad) =>{
      console.log('Registrando...');
      if(this.alert){
        console.log("Esta  alerta es true ..");
      }
    });
  }

  cancelar(){
    console.log("Cancelando...");
  }

  get f(){
    return this.formDialog.controls;
  }

}
