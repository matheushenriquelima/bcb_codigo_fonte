import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import Barbeiro from '../models/Barbeiro.model';

@Component({
  selector: 'app-criar-reserva',
  templateUrl: './criar-reserva.component.html',
  styleUrls: ['./criar-reserva.component.css'],
})
export class CriarReservaComponent implements OnInit {

  barbeiro: Barbeiro = new Barbeiro();

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.buscarBarbeiro();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalConfirmComponent,
      cssClass: 'my-custom-class',
      componentProps:{
        'dataEHorario': '21/12/2021 às 09:00',
        'LocalAtendimento':'Catolé, Campina Grande PB'
      }
    });
    return await modal.present();
  }
  buscarBarbeiro(){
    this.barbeiro.endereco = 'Rua Joao Pessoa, Centro';
    this.barbeiro.nome = 'Zézinho Barbeiro';
    this.barbeiro.horarios = ['8:00' , '9:00', '7:00','8:00' , '9:00', '7:00']
  }

}
