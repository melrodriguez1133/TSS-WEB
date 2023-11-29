import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  showModal = false;
  closeModal() {
    this.showModal = false; // Asegúrate de tener una variable llamada showModal en tu componente
  }
}
