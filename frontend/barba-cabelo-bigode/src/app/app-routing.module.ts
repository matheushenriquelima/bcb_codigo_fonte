import { BarbeirosPertoComponent } from './barbeiros-perto/barbeiros-perto.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { SuasReservasComponent } from './suas-reservas/suas-reservas.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'editar',
    component: InformacoesComponent
  },
  {
    path: 'barbeiros-perto',
    component: BarbeirosPertoComponent
  },
  {
    path: 'suas-reservas',
    component: SuasReservasComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
