import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // loadChildren: () => import('./tela-inicio/tela-inicio.module').then( m => m.TelaInicioModule)
    component: TelaInicioComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
