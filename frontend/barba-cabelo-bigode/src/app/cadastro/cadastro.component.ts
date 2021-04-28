import { ClienteService } from './../cliente.service';
import { BarbeiroService } from './../barbeiro.service';
import { Component, Input, OnInit } from '@angular/core';
import Barbeiro from '../models/Barbeiro.model';
import Cliente from '../models/cliente.model';
import User from '../models/User.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  isBarbeiro = false;

  cliente: Cliente = new Cliente();

  barbeiro: Barbeiro = new Barbeiro();

  user: User = new User();

  constructor( private barbeiroService:BarbeiroService, private clienteService: ClienteService,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  cadastrar(){
    this.presentToast()
    this.isBarbeiro ? this.cadastroBarbeiro() : this.cadastrarCliente();
  }

  cadastroBarbeiro() {
    this.barbeiro.fromUser(this.user);
    this.barbeiroService.cadastrar(this.barbeiro).subscribe(() => this.presentToast());
  }

  cadastrarCliente() {
    this.cliente.fromUser(this.user);
    this.clienteService.cadastrar(this.cliente).subscribe();
  }

  setIsBarbeiro() {
    this.isBarbeiro = !this.isBarbeiro;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
