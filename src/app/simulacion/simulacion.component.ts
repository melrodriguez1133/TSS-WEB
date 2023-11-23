import { Component, AfterViewInit } from '@angular/core';
declare const Chart: any; // Declaración para acceder a Chart.js globalmente

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css']
})
export class SimulacionComponent implements AfterViewInit {
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  ngAfterViewInit() {
    this.initializeSimulation();
  }

  initializeSimulation() {
    const simulateButton = document.getElementById('simulate-button');
    if (simulateButton) {
      simulateButton.addEventListener('click', () => {
        const numDiasInput = document.getElementById('numDias') as HTMLInputElement;
        const horasTrabajoInput = document.getElementById('horasTrabajo') as HTMLInputElement;
        const probabilidadesInput = document.getElementById('probabilidades') as HTMLInputElement;
        const resultsContainer = document.getElementById('results');
        const chartContainer = document.getElementById('chart-container');

        if (numDiasInput && horasTrabajoInput && probabilidadesInput && resultsContainer && chartContainer) {
          const numDias = parseInt(numDiasInput.value);
          const horasTrabajo = parseInt(horasTrabajoInput.value);
          const probabilidades = probabilidadesInput.value;

          const probabilidadesAcumuladas = probabilidades.split(',').map(Number);

          resultsContainer.innerHTML = '';
          chartContainer.innerHTML = '<canvas id="myChart" width="400" height="100"></canvas>';

          const gananciasPorDia: number[] = [];

          for (let i = 0; i < numDias; i++) {
            const gananciaDia = this.simulateDay(horasTrabajo, probabilidadesAcumuladas);
            gananciasPorDia.push(gananciaDia);

            const resultElement = document.createElement('p');
            resultElement.textContent = `Dia ${i + 1}: Ganancia: Bs. ${gananciaDia.toFixed(2)}`;
            resultsContainer.appendChild(resultElement);
          }

        }
      });
    }
  }

  simulateDay(hours: number, probabilidades: number[]): number {
    let gananciaDia = 0;

    for (let j = 0; j < hours; j++) {
      const ventaHora = Math.random();
      let ventasPorHora = 0;

      for (let k = 0; k < probabilidades.length; k++) {
        if (ventaHora <= probabilidades[k]) {
          ventasPorHora = k;
          break;
        }
      }

      const gananciaHora = ventasPorHora * 2.5;
      gananciaDia += gananciaHora;
    }

    return gananciaDia;
  }

  
}
