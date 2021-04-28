import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InformacoesComponent } from './informacoes/informacoes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // loadChildren: () => import('./tela-inicio/tela-inicio.module').then( m => m.TelaInicioModule)
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'editar',
    component: InformacoesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
