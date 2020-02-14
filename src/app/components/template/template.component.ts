import { Component} from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid #d9534f;
  }
  `]
})
export class TemplateComponent {
  usuario:object ={
    nombre: null,
    apellido: null,
    correo: null,
    pais : "",
    sexo: "Hombre",
    acepta: false
  }
  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },{
    codigo: "ESP",
    nombre: "España"
  },{
    codigo: "CDMX",
    nombre: "Ciudad de México"
  }]
  sexos: string[] =["Hombre","Mujer"]
  constructor() { }

  guardar(forma:NgForm){
    console.log("NgForma",forma);
    console.log("valor",forma.value);
    console.log("usuario", this.usuario);
  }

}
