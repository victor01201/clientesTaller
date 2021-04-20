import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuestrosclientesComponent } from './components/nuestrosclientes/nuestrosclientes.component';

const routes: Routes = [
  {
    path: '',redirectTo:'clientes',pathMatch: 'full'
  },
  {
    path:'clientes',component: NuestrosclientesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
