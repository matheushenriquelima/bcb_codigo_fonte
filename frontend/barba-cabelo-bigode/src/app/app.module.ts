import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarbeirosPertoComponent } from './barbeiros-perto/barbeiros-perto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CriarReservaComponent } from './criar-reserva/criar-reserva.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { LoginComponent } from './login/login.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { SuasReservasComponent } from './suas-reservas/suas-reservas.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    InformacoesComponent,
    BarbeirosPertoComponent,
    LoginComponent,
    SuasReservasComponent,
    CriarReservaComponent,
    ModalConfirmComponent
   ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
