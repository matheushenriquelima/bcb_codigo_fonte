import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicioComponent } from './tela-inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [TelaInicioComponent, CadastroComponent, LoginComponent],
  entryComponents: [],
  imports: [IonicModule.forRoot(), CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class TelaInicioModule { }
