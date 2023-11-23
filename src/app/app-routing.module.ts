import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulacionComponent } from './simulacion/simulacion.component';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'simulacion', component: SimulacionComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: '/welcome' } // Redirige a 'welcome' si la ruta no coincide con ninguna definida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }