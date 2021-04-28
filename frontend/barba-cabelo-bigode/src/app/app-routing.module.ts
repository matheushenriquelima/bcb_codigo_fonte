import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.component').then( m => m.CadastroComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    component: CadastroComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
