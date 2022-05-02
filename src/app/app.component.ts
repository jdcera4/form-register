import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form-register';
  pais = '';
  primerNombre = '';
  segundoNombre = '';
  genero = '';
  nacimiento = '';
  tipoDocumento = '';
  numeroDocumento = 0;
  fotoDocumentoFrente = '';
  fotoDocumentoReverso = '';

  siguiente() {
    if (this.numeroDocumento <= 12345) {
      alert('falta por completar');
    }
    if (this.pais.length === 0) {
      alert('falta por completar');
    }
    if (this.primerNombre.length === 0) {
      alert('falta por completar');
    }
    if (this.segundoNombre.length === 0) {
      alert('falta por completar');
    }
    if (this.genero.length === 0) {
      alert('falta por completar');
    }
    if (this.nacimiento.length === 0) {
      alert('falta por completar');
    }
    if (this.tipoDocumento.length === 0) {
      alert('falta por completar');
    }
    if (this.fotoDocumentoFrente.length === 0) {
      alert('falta por completar');
    }
    if (this.fotoDocumentoReverso.length === 0) {
      alert('falta por completar');
    }
    console.log(
      'pais: ',
      this.pais,
      'genero: ',
      this.genero,
      'primer nombre: ',
      this.primerNombre,
      'segundo nobre: ',
      this.segundoNombre,
      'fecha de nacimiento: ',
      this.nacimiento,
      'Tipo de documento: ',
      this.tipoDocumento,
      'foto documento frente: ',
      this.fotoDocumentoFrente,
      'foto documento reverso: ',
      this.fotoDocumentoReverso
    );
  }
}
